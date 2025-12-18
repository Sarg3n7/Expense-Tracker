import {User} from '../models/User.js'
import {Income} from '../models/Income.js'

//Add Income Source
const addIncome = async(req, res) => {
    const userId = req.user.id;
    try {
        const { icon, source, amount, date } = req.body || {}
        
        if(!source || !amount || !date){
            return res.status(400).json({message: "All fields are required"})
        }

        const newIncome = new Income({
            userId,
            icon,
            source,
            amount,
            date: new Date(date)
        })

        await newIncome.save();
        res.status(200).json(newIncome)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
}

//Get All Income Source
const getAllIncome = async(req, res) => {
    const userId = req.user.id;

    try {
        const income = await Income.find({userId}).sort({date: -1})
        res.json(income)
    } catch (error) {
        res.status(500).json({ message: "Server Error"})
    }
}

//Delete Income Source
const deleteIncome = async(req, res)=>{

}

//Download Excel
const downloadIncomeExcel = async(req, res) => {

}


export {
    addIncome,
    getAllIncome,
    deleteIncome,
    downloadIncomeExcel
}