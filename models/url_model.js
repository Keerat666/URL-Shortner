//Require Mongoose
var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var urlSchema = new Schema({
    urlCode: {type: String, required: true}, 
    longUrl: {type: String, required: true},
    shortUrl: {type: String, required: true},
    date:{type: String, default: Date.now()},
    hit_count : {type: Number, default: 0},
    date_list : {type: [Date], default: []},
    
}, { collection: 'url_collection' });

var Model = mongoose.model('link', urlSchema);

module.exports = Model;