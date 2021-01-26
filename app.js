const express = require("express") //веб сервер
// console.log(express)
const shopRoutes = require("./routes/shopRoutes")

const PORT = 8000;
const app = express();// створюєм об'єкт 




app.use(shopRoutes)
app.listen(PORT,() => console.log(`Server running onport ${PORT}`)) //запускаєм веб сервер 
