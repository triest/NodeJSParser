const superagent = require('superagent')
const DomParser = require('dom-parser')
const HTMLParser = require('node-html-parser')
const cheerio = require('cheerio')

let links

function doRequwest (page) {
  return new Promise(function (resolve, reject) {
    superagent.get(
      'https://www.marathonbet.ru/su/popular/Football?page=' + page +
      '&pageAction=getPage&_=1568307791615').end((err, res) => {
      if (!err && res.statusCode == 200) {
        resolve(res.text)
      } else {
        reject(err)
      }
    })
  })
}

module.exports = {
  test: async function () {
    let page = 0
    //page = page + 1
    let next = true
    let parser = new DomParser()
    let doom
    let temp
    let content
    let doc
    let data = null
    let resdata
    let prop
    let cheerio
    let $
    let arrayLinks = Array()
    next = true
    while (page < 30) {
      page = page + 1

      try {
        data = await doRequwest(page)
        resdata = JSON.parse(data)
        prop = resdata[1].val
        next = prop
        if (next === false) {
          break
        }
        content = resdata[0].content

        doom = parser.parseFromString(content)
        temp = parser.parseFromString(doom.rawHTML)
        temp = temp.rawHTML
        doc = parser.parseFromString(temp, 'text/xml')
        //    console.log(doc.rawHTML);
        temp = doc.rawHTML
        cheerio = require('cheerio')
        $ = cheerio.load(temp)
        links = $('.member-link')
        for (let i = 0; i < links.length; i++) {
          arrayLinks.push(links[i].attribs.href)
        }

      } catch (err) {
        console.error(err)
      }

      //console.log(arrayLinks)
      return arrayLinks

    }

  },

  parseMatch: async function (arrayLinks) {
    let parser = new DomParser()
    let doom
    let temp
    let cheerio
    let doc
    let $
    console.log(arrayLinks)
    throw new Error('your die message here')
    url = 'https://www.marathonbet.ru/su/betting/Football/Internationals/' +
      arrayLinks[0]
    console.log(url)
    superagent.get(
      url).end((err, res) => {
      if (!err && res.statusCode == 200) {
        doom = parser.parseFromString(res)
        temp = parser.parseFromString(doom.rawHTML)
        temp = temp.rawHTML
        console.log(temp)
        //doc = parser.parseFromString(temp, 'text/xml')

//        cheerio = require('cheerio')
        //   $ = cheerio.load(temp)

        //   console.log($)
      } else {

      }
    })
  },

}