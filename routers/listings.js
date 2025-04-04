const express= require("express");
const router= express.Router();
const listing = require("../models/listings");
const path= require("path");
app.set("view engine","ejs");
app.set("view",path.join(__dirname,"./view"));

app.get("/listings",async(req, res)=>{
    const alllistings= await listing.find({});
    res.render("./listings/index.js",{alllistings});
})