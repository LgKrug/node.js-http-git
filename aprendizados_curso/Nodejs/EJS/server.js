const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    const items = [
        {
            title: 'D',
            message: 'esenvolver aplocações/ serviços de forma fácil'
        },
        {
            title: 'E',
            message: 'JS usa JavaScript para renderizar HTML'
        },
        {
            title: 'M',
            message: 'uito facil de usar'
        },
        {
            title: 'A',
            message: 'mor'
        },
    ]

    const subtitle = "Uma linguagem de modelagem para a criação de paginas HTML"
    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle,
    })
})

app.get("/sobre", (req, res) => {
    res.render('pages/about')
})

app.listen(8080)
console.log("Rodando");