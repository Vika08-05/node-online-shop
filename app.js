const express = require("express") //веб сервер
const path = require('path')
// console.log(express)
const shopRoutes = require("./routes/shopRoutes")

const PORT = 8000;
const app = express();// створюєм об'єкт 

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, "static")));




app.use(shopRoutes)
app.listen(PORT,() => console.log(`Server running onport ${PORT}`)) //запускаєм веб сервер 
