const express= require("express");
const app= express();
const path= require("path");
let staticFiles= express.static(path.resolve(__dirname, "public"));
app.use(staticFiles);

app.listen(process.env.PORT,()=> console.log("Servidor corriendo en el puerto 3000"));

app.get("/", (req, res)=> {
let htmlPath= path.join(__dirname, "/views/home.html");
res.sendFile(htmlPath);
});

app.get("/register", (req, res)=> {
    let registerPath= path.join(__dirname, "/views/register.html");
    res.sendFile(registerPath);
});

app.get("/login", (req, res)=> {
    let loginPath= path.join(__dirname, "/views/login.html");
    res.sendFile(loginPath);
});