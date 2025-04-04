const express= require("express");
const app= express();
const mongoose= require("mongoose");
const listing = require("./model/listing");
const path = require("path");
const methodeoverride= require("method-override");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./views"));
app.use(express.urlencoded({extended: true}));
app.use(methodeoverride("_method"));

main().then(()=>{
    console.log("connected to DB")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/assignment');
} 


app.get("/",(req, res)=>{
    res.send("server is runnig");
    //res.redirect("/listings");
});

////////// show all the route /////////

app.get("/listings", async(req, res)=>{
   const alllistings= await listing.find({});
   res.render("listings/index.ejs", {  alllistings });
      
    
});
/// create new listings/////

app.get("/listings/new",(req, res)=>{
    res.render("listings/new.ejs");
})

///////////show id route  or indivisual route///////

app.get("/listings/:id", async(req, res)=>{
    let{id}=req.params;
    const list= await listing.findById(id);
    res.render("listings/show.ejs",{list});
});

/// create post route////

app.post("/listings", async(req, res)=>{
    const newlisting= new listing(req.body.listing);
    await newlisting.save();
    res.redirect("/listings");
})
////////edit  route//////
app.get("/listings/:id/edit", async(req, res)=>{
    let {id}= req.params;
    const list=  await listing.findById(id);
    res.render("listings/edit.ejs",{list});
})

/////update route/
app.put("/listings/:id", async(req, res)=>{
    let {id}= req.params;
    await listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect("/listings");
})
///////////DELETE ROUTE////

    app.delete("/listings/:id", async(req, res)=>{
        let {id}= req.params;
        const deletedlist= await listing.findByIdAndDelete(id);
        res.redirect("/listings");
    })
    


app.listen(8080 ,()=>{
    console.log("server is listening on port 8080");
    
})