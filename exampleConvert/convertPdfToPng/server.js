const express = require('express');
const fs = require('fs');
const path = require('path');
// const os = require('os');
const pdf = require('pdf-poppler');
const PDF2Pic = require("pdf2pic");
const pdftoimage = require('pdftoimage');

const webserver = express();
webserver.use(express.json()); // мидлварь, умеющая обрабатывать тело запроса в формате JSON

const port = 4444;

// https://www.npmjs.com/package/pdf-poppler 
//https://www.npmjs.com/package/pdf2pic
//https://www.npmjs.com/package/pdftoimage

// lotus.pdf
let file = './files/lotus.pdf';
let filePdftoimage = './files/goat.pdf';

let opts = {
    format: 'png',
    out_dir: path.dirname(file),
    scale: 1500,
	// out_prefix: path.baseName(file, path.extname(file)),
	out_prefix: 'dfdfdf',
    page: null
}

const pdf2pic = new PDF2Pic({
    density: 300,           // output pixels per inch
    savename: "untitled",   // output file name
    savedir: "./images",    // output file location
    format: "png",          // output file format
    size: "600x600"         // output size in pixels
});



webserver.get('/', (req, res) => { 
	res.send(`<p>hello</p>`);
});

webserver.listen(port, () => {

    //--------------------------------------pdf-poppler
	pdf.info(file)
	.then(pdfinfo => {
		// console.log(pdfinfo);
	});
	pdf.convert(file, opts)
    .then(res => {
        console.log('pdf-poppler Successfully converted');
    })
    .catch(error => {
        console.error(error);
    })
    //--------------------------------------pdf-poppler


    //--------------------------------------pdf2pic
    // pdf2pic.convert("./files/goat.pdf", -1).then((resolve) => {
    //     console.log("pdf2pic image converter successfully!");
       
    //     return resolve;
    // });
    //--------------------------------------pdf2pic


    //--------------------------------------pdftoimage
    // pdftoimage(filePdftoimage, {
    //     format: 'png',  // png, jpeg, tiff or svg, defaults to png
    //     prefix: 'img',  // prefix for each image except svg, defaults to input filename
    //     outdir: 'out'   // path to output directory, defaults to current directory
    //   })
    //   .then(function(){
    //     console.log('--pdftoimage Conversion done');
    //   })
    //   .catch(function(err){
    //     console.log(err);
    //   });
    //--------------------------------------pdftoimage

    console.log('--run server')
});