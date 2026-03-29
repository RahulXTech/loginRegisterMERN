import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

// define routes FIRST
app.get("/", (req, res) => {
  res.send("Hey, I'm root.");
});

// THEN start server
app.listen(PORT, () => {
  console.log("Port is listening on:", PORT);
});