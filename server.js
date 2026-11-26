import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();

app.use(express.static("public"));

// create storage configuration
const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null,'uploads/');
    },
    filename:(req, file, cb) => {
        cb(null,Date.now() + path.extname(file.originalname));
    }
});



// initialize multer
const upload = multer({ storage: storage });

// file upload route
// app.post('/upload', upload.single('myfile'),(req, res) => {
//     if (!req.file) {
//         return res.send("No file uploaded");
//     }
//     console.log(req.file);
//     res.send("File uploaded successfully");
// });

app.post('/upload-multiple', upload.array('images',5),(req,res)=>{
     res.send("Multiple files uploaded succesfully")
})


app.listen (3000,()=>{
     console.log("Server running at http://localhost:3000")
})