const express = require('express');
const { resolve } = require('path');
const path = require('path');

const app = express();


if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "build", "index.html"));
    });
}

app.listen(process.env.PORT || 3000, (err) => {
    if(err) {return console.log(err)}
    console.log('Super!')
})