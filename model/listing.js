const mongoose= require("mongoose");
const schema= mongoose.Schema;
// const { ref, string } = require("joi");
// const { url } = require("inspector");
// const { kMaxLength } = require("buffer");

const listingschema= new schema({
    title: {
        type:String,
        required:true,
       
    },
    description: String,
    
    status: {
        type: String,
        enum: ['TODO', 'IN_PROGRESS', 'COMPLETED'],
        default: 'TODO'
      },
    priority: { type: String, enum: ['LOW', 'MEDIUM', 'HIGH'] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now},
    Duedate: Date,
   

    
});







const listing= mongoose.model("listing" ,listingschema);
module.exports=listing;