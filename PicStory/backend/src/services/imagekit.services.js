const ImageKit = require("imagekit");

const client = new ImageKit({
  privateKey: process.env.PRIVATE_KEY,
  publicKey: process.env.PUBLIC_KEY,
  urlEndpoint: process.env.URL_END_POINT,
});

async function uploadFile(buffer) {
    try {
        const result = await client.upload({
            file: buffer.toString("base64"),
            fileName: Date.now() + ".jpg"
        });

        return result;
    } catch (error) {
        console.log("Image upload error:", error);
    }
}

module.exports = uploadFile;