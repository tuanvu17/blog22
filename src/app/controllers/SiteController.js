

const Course = require('../models/Course')

class SiteController{
    
    index (req, res){
      //  res.render('home');
        Course.find({}, (err, courses)=>{
            if(!err) {
                res.json(courses)
            }else{
                res.status(400).json({error:'ERROR'})
            }
        })
    }

    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteController;