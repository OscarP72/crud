const mongoose= require ("mongoose");


const DiscoSchema= new mongoose.Schema({
    title: {type: String, required: true},
    company:{ type: String},
    cover: {type: String, required: true},
    year:{ type: Number},
    singer:{ type: String, required: true},
},{
    timestamps: true,
});

const Disco= mongoose.model("disco", DiscoSchema);

module.exports= Disco;