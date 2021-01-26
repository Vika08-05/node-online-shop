const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("<h1>Home page</h1>")
});
router.get("/about",(req, res, next) => {
    res.send("<h1>About page</h1>")
})
router.get("/Vacancies",(req, res, next) => {
    res.send("<h1>Vacancies page</h1>")
})
router.get("/Careers",(req, res, next) => {
    res.send("<h1>Careers page</h1>")
})
router.get("/Contact",(req, res, next) => {
    res.send("<h1>Contact page</h1>")
})
router.get("/Resources",(req, res, next) => {
    res.send("<h1>Resources page</h1>")
})
router.get("/",(req, res, next) => {
    res.send("<h1>Home page</h1>")
})


module.exports = router;
