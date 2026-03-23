const app = require("./src/app")


const PORT = process.env.PORT || 3000

app.get("/", (req, res)=>{
    res.send("Hey I'm root /. ")
})

app.listen(PORT,()=>{
    console.log(`Server is listening on PORT: ${PORT}`)
})
