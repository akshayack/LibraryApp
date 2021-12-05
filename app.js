const express = require("express");
const app = new express();

app.set('port', process.env.PORT || 4000);

const nav = [
  { link: "/", name: "Home" },
  { link: "/books", name: "Books" },
  { link: "/authors", name: "Authors" },
  { link: "/addBook", name: "New Book" },
  {link: "/addAuthor", name: "New Author"},
  { link: "/contact", name: "Contact" },
  { link: "/login", name: "Login" },
  { link: "/signup", name: "Signup" },
];

const booksRouter = require("./src/routes/bookRoutes")(nav);
const authorsRouter = require("./src/routes/authorRoutes")(nav);
const contactRouter = require("./src/routes/contactRoutes")(nav);
const loginRouter = require("./src/routes/loginRoutes")(nav);
const signupRouter = require("./src/routes/signupRoutes")(nav);
const mainRouter = require('./src/routes/mainRoutes')(nav);
const addBookRouter = require("./src/routes/addBookRoutes")(nav);
const addAuthorRouter = require("./src/routes/addAuthorRoutes")(nav);

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
app.use("/contact", contactRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/index",mainRouter);
app.use("/addBook",addBookRouter);
app.use("/addAuthor",addAuthorRouter);

app.get("/", function (req, res) {
  res.render("login", {
    nav,
    title: "Library App",
  });
});

app.listen(app.get('port'));