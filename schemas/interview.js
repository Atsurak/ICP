const mongoose = require('mongoose')

const interview = new mongoose.Schema({
    participants : {
        type: Array,
        require:true
    },
    sdate:{
        type: String,
        require:true
    },
    stime:{
        type: String,
        require:true
    },
    edate:{
        type: String,
        require:true
    },
    etime:{
        type: String,
        require:true
    }
    
});

module.exports = mongoose.model('interviews',interview);