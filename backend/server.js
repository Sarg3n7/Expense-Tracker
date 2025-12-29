import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import incomeRoutes from './routes/incomeRoutes.js'
import expenseRoutes from './routes/expenseRoutes.js'
import dashboardRoutes from './routes/dashboardRoutes.js'
import path from 'path'
import { fileURLToPath } from 'url';


// dotenv.config({
//     path: './.env'
// })

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, '.env'),
});



const app = express();



app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    })
)

app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

connectDB();

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/income", incomeRoutes)
app.use("/api/v1/expense", expenseRoutes)
app.use("/api/v1/dashboard", dashboardRoutes)

app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", message: "Server is running" });
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});


app.use('/uploads', express.static(path.join(__dirname, 'uploads')))


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
