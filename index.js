const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const pathToCounter = path.join(__dirname, 'counters.json');
const data = JSON.parse(fs.readFileSync(pathToCounter, 'utf-8'));

app.get('/', (req, res) => {
    res.send(`<h1>Main page<h1/> <a href="/about">About page<a/>
    <p>Количество посещений: ${++data.mainCount}</p>`)
    fs.writeFileSync(pathToCounter, JSON.stringify(data, null, 2));
})

app.get('/about', (req, res) => {
    res.send(`<h1>About page<h1/> <a href="/">Main page<a/>
    <p>Количество посещений: ${++data.aboutCount}</p>`)
    fs.writeFileSync(pathToCounter, JSON.stringify(data, null, 2));
})

app.listen(3000);
