require("dotenv").config();

const app = require("./src/app");
const db_connect = require("./src/db/db.connection");

db_connect();  

const PORT = process.env.PORT || 5000;

app.get("/", (req, res)=>{
    console.log("This is the HOME route.");
    res.send("This is the home route.");
})

app.listen(PORT, ()=>{
    console.log("App is listening on port:", PORT);
})