//constantes
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/db");
const session = require("express-session");
const cookieSession = require("cookie-session");
const http = require('http');
const https = require("https");
const fs = require("fs");;
const helmet = require("helmet");



const keycr = require("./keys/keyrc");



/*
const admAuth = require("./middleweres/admmiddlewere")
*/

app.use(helmet());

//routers
const categoryController = require("./category/categoryContoller");
const articleController = require("./article/ArticleController");
const CollectionController = require("./collection/CollectionController");
const UserController = require("./user/UserController");
const ADMController = require("./adm/admController");
//db
connection.authenticate().then(() => {
    console.log("conecatado ao DB")
}).catch((err) => {
    console.log(`erro no DB:  ${err}`)
})


//tabelas
const User = require("./user/04user");
const Category = require("./category/01Category");
const Card = require("./collection/02card");
const ADMTable = require("./adm/admDB");
const Overview = require("./adm/overviewDB");
const OverviewRate = require("./adm/overviewRate");
function tabelas() {

    for (let i = 0; i < 20; i++) {

        var CardType = require("./collection/03cardtype");
        var Article = require("./article/zArticle");
        var CardCollection = require("./collection/CardCollection");
        var zSearchCard = require("./collection/zsearchCard");

    }

}
tabelas()





//cookies
app.use(cookieSession({
    name: "cokiesdouser",
    keys: ['key1', 'key2'],
    cookie: {
        maxAge: 30 * 60 * 1000  // uma meia-hora
    }
}));

//app.use(helmet());
//vews engine
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));




//rotas
app.get("/", (req, res) => {
    let page = 0;
    let offset;
    let limit = 40;

    if (isNaN(page) || undefined) {

        res.redirect("/collection/0")


    } else {
        offset = parseInt(page) * limit;

        Card.findAndCountAll({ limit: limit, offset: offset, order: [["name", "ASC"]] }).then(cards => {
            let next;
            if (offset + limit >= cards.count) {
                next = false;
            } else {
                next = true
            }
            let count = cards.count;
            let tamanho = count / limit;
            let result = {
                cards: cards,
                next: next,
                page: parseInt(page),
                pageNum: tamanho

            }
            res.render("partials/collection", {
                result: result
            })
        }).catch(() => {
            res.redirect("/")
        })
    };
  })












//post


//routers

app.use("/", categoryController);
app.use("/", articleController);
app.use("/", CollectionController);
app.use("/", UserController);
app.use("/", ADMController);
app.get('/sitemap.xml', function(req, res) {
res.sendFile('/root/chaoticrp/sitemap/sitemap.xml');
})
app.get("/booster", (req, res) => {
    res.render("boostter")
})
app.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: \nSitemap:https://www.chaoticrp.net/sitemap.xml");
});
const PORT = process.env.PORT || 80;




//certbot certonly --webroot -w /srv/www/chaoticrp/ -d www.chaoticrp.net -d chaoticrp.net


/*var httpsServer =  https.createServer({
 key: fs.readFileSync('./cert/privkey.pem')
    , cert: fs.readFileSync('./cert/fullchain.pem')}, app);
  */

var httpsServer = https.createServer({
    key: keycr,
    cert: fs.readFileSync("./cert/chaoticrp_net.crt"),
    ca: [fs.readFileSync('./cert/SectigoRSADomainValidationSecureServerCA.crt'),
    fs.readFileSync('./cert/USERTrustRSAAAACA.crt'),
    fs.readFileSync("./cert/AAACertificateServices.crt")],
}, app);

var httpServer = http.createServer(app);
httpServer.listen(80);
httpsServer.listen(443);
// app.listen(PORT, () => {  console.log(`conecatado a porta ${PORT}`) });




