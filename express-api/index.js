const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

const app = express();

// enable files upload
app.use(fileUpload({
    createParentPath: true,
    limits: { 
        fileSize: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
    },
}));

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

//make uploads directory static
app.use(express.static('../Uploads'));

const port = process.env.PORT || 3000;

// upoad single file

app.get('/hello', async(req,res) => {res.send({hello: "world"});});



app.post('/uploadPage', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "page") to retrieve the uploaded file
            let page = req.files.page;
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            page.mv('../Uploads/' + page.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: page.name,
                    mimetype: page.mimetype,
                    size: page.size,
                    lang: req.lang
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});




//start app 
app.listen(port, () => 
  console.log(`App is listening on port ${port}.`)
);