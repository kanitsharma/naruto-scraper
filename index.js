"use strict";

const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const readline = require('readline')
const baseurl = 'http://naruto.wikia.com/wiki/'
let title,description

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter the name of character ", answer => {
  request(baseurl+answer, (error, response, html) => {
    if(!error){
      var $ = cheerio.load(html)
      title = $('.header-title h1').text()
      description = $('#mw-content-text').children().eq(2).text()
      console.log(title,'\n','Description : ','\n',description);
    }
  })
  rl.close();
});
