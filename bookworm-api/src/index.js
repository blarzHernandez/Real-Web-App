var express = require("express");
var path = require("path");

//initialie our express app
const app = express();


app.post("/api/auth/",(req, res) => {
    res.status(400).json({errors: {global:"Invalid credentials"}});
});

//handling requests / routes to cath-all route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});



const port = 9090;

//
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})