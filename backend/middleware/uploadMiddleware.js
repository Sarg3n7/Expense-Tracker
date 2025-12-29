import multer from 'multer';

//For saving files to local storage
// const storage = multer.diskStorage({
//     destination: (req, res, cb) => {
//         cb(null, 'uploads/')
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`)
//     }
// })


//For saving files to memory for cloud storage
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) =>{
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(new Error('Only .jpeg, .jpg and .png formats are allowed'), false)
    }
}

const upload = multer({ 
    storage, 
    fileFilter,
    limits:{fileSize: 5 * 1024 * 1024} // 5MB limit
 })

export {upload}