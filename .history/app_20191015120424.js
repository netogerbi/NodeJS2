var express = require("express"); //retorna uma função
var app = express(); //executa a função

app.set('view engine', 'ejs')
app.listen(3010, ()=> console.log("Servidor rodando com express"));


app.get("/",(req, res)=>{
    
});

app.get("/tecnology",(req, res)=>{
  res.render("section/tecnology");
});