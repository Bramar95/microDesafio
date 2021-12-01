const express= require("express");
const app= express();
const path= require("path");
let staticFiles= express.static(path.resolve(__dirname, "public"));
app.use(staticFiles);

app.listen(3000,()=> console.log("Servidor corriendo en el puerto 3000"));

app.get("/", (req, res)=> {
let htmlPath= path.join(__dirname, "/views/home.html");
res.sendFile(htmlPath);
});