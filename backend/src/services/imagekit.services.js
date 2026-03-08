// import ImageKit from '@imagekit/nodejs';
const ImageKit = require("@imagekit/nodejs")
const client = new ImageKit({
  privateKey: process.env.PRIVATE_KEY, // This is the default and can be omitted
  publicKey: process.env.PUBLIC_KEY, // This is the default and can be omitted
  urlEndpoint: process.env.URL_END_POINT, // This is the default and can be omitted
});

async function uploadFile(buffer){
    const result = await client.files.upload({
        file: buffer.toString("base64"),
        fileName : Date.now() + ".jpg"
    })
    return result;
}
module.exports = uploadFile;
