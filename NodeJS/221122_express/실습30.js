const express = require("express");
const app = express();
const port = 8080 ;

app.set("view engine","ejs");
app.use('/views', express.static(__dirname + '/views'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/info" , (req,res) => {
    res.render("실습30");
    console.log(req.query);
});

app.listen(port, () => {
    console.log("server is open: ", port)
})