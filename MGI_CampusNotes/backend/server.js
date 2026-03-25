const app = require("./src/app")
const connectDB = require("./src/config/db.connect")

const PORT = process.env.PORT || 3000


app.get("/", (req, res)=>{
    res.send("Hey I'm root /. ")
})

app.listen(PORT, async ()=>{
    console.log(`Server is listening on PORT: ${PORT}`)

    await connectDB()
})





