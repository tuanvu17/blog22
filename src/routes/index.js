const { index } = require("../app/controllers/NewsController");


const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {

    app.use('/news', newsRouter);

    //cu tuyen duong nao
    app.use('/', siteRouter);

}

module.exports = route