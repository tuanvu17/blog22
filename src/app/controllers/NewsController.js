


class NewsController{
    
    index (req, res){
        res.render('news');
    }
    //:slug
    show(req, res){
        res.send('NEWS DETAIL')
    }
}

module.exports = new NewsController