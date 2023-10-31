const express =  require("express");
const Router =  require('./routes/routes.js');
const path =  require("path");

const app = express();
const port = 80;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use('/', Router);

app.listen(port, () => {
    console.log(`Pokeneas app listening on port ${port}`);
})