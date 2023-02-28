const express = require("express");
const nunjucks = require("nunjucks");
const sequelize = require("./database.js");
// models
const Employee = require("./models/employee");

// The type of PORT on which the site is based
const PORT = process.env.PORT || 3000;
const app = express();

// I used nunjucks as template engine
nunjucks.configure("views", {
    express: app,
    autoescape: true
});


app.set("view engine", "html");
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// serve static files (css/jss...)
app.use("/assets", express.static(__dirname + "/assets"));


// routes
// home page
app.get("/", async (req, res) => {
  const employee_data = await Employee.findAll({});
  res.render("home.html", {employee_data});
});

// add page
app.get("/add", (req, res) => {
  res.render("add.html");
});

// add data - add new employee into database
app.post("/add", async (req, res) => {
  const {name, email, description} = req.body;
  await Employee.create({name, email, description});
  res.redirect("/");
});


// edit page
app.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Employee.findByPk(id);
  res.render("edit.html", {data});
});

// edit data: edit existing employee data
app.post("/edit", async (req, res) => {
  const {id, name, email, description} = req.body;
  await Employee.update({name, email, description}, {where: {id: id}});
  res.redirect(`/edit/${id}`);
});

// delete data
app.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Employee.destroy({where: {id: id}});
  res.redirect("/");
});


// syncing database.. if models got any changes then it will also update in the database
sequelize.sync().then(() => {
  console.log("database syncing.....");
}).catch((error) => {
  console.log(error);
});


try{
  // connecting with database
  sequelize.authenticate();
  console.log("database connection has been established successfully");
}catch(error){
  console.error("unable to connect database:", error);
}


// make the server run
app.listen(PORT, () => {
  console.log(`server is listening at http://localhost:${PORT}`);
});