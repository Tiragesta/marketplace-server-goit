const multer = require('multer');
const fs = require('fs');
const path = require('path');

const TEMP_IMAGE_FOLDER = path.join(__dirname, '../../../', 'assets');
const PRODACTS_IMAGE_FOLDER  = path.join(__dirname, '../../../data/products');

const upload = (req, res) => {
    const file = req.file;
    const productId = req.body.productId;
    const target = path.join(PRODACTS_IMAGE_FOLDER, 'product-' + productId)
    new Promise((res, reject) => {
        const readStream = fs.createReadStream(file.path);
        const writeStream = fs.createWriteStream(target);

        readStream.on('error', () => {
            fs.unlink(file.path, () => {
                reject('error while opening read stream');
            });
        });
        writeStream.on('error', () => {
            fs.unlink(file.path, () => {
                reject('error while opening write stream');
            });
        });

        readStream.on('close', () => {
            fs.unlink(file.path, () => {
                resolve(target)
            });
        });
        readStream.pipe(writeStream);
    }).then(filePath => {
        res.status(200);
        res.json({status: `was saved to ${filePath}`})
    }).catch(err => {
        res.status(500);
        res.json({error: err})
    });
}

module.exports = [multer({dest: TEMP_IMAGE_FOLDER}).single('file'), upload];