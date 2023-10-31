const pokeneas = require("../db/dbPokeneas.js");
const os = require("os")

function getPokeneaRandomForJson(){
    const random = Math.floor(Math.random() * 7);
    resourceData = {
        'containerId': os.hostname(),
        'id': pokeneas[random].id,
        'name': pokeneas[random].name,
        'height': pokeneas[random].height,
        'hablity': pokeneas[random].hablity,
    };
    return resourceData;
}

function getPokeneaRandomForView(){
    const random = Math.floor(Math.random() * 7);
    resourceData = {
        'containerId': os.hostname(),
        'name': pokeneas[random].name,
        'image': pokeneas[random].image,
        'quote': pokeneas[random].quote
    }
    return resourceData;
}

module.exports = {
    getPokeneaRandomForJson,
    getPokeneaRandomForView
}