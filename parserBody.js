const superagent = require('superagent');
const DomParser = require('dom-parser');
const HTMLParser = require('node-html-parser');
const cheerio = require('cheerio')

module.exports = {
    test: async function () {
        superagent.get('https://www.marathonbet.ru/su/popular/Football?page=1&pageAction=getPage&_=1568307791615')

            .end((err, res) => {
                let data = res.text;
                try {
                    const resdata = JSON.parse(data)
                    let prop = resdata[1].prop;
                    let content = resdata[0].content;
                    var parser = new DomParser();
                    let doom = parser.parseFromString(content);
                    let temp = parser.parseFromString(doom.rawHTML);
                    temp = temp.rawHTML;
                    let doc = parser.parseFromString(temp, "text/xml");
                    //    console.log(doc.rawHTML);
                    temp = doc.rawHTML;
                    let cheerio = require('cheerio');
                    let $ = cheerio.load(temp);
                    let links = $('.member-link');
                    console.log(links['0'].attribs.href);


                    //   const $ = cheerio.load(temp)
                    //     console.log($);

                    // temp=HTMLParser.parse(temp);
                    // console.log(temp.childNodes);
                    //       console.log(doc.rawHTML.getElementsByClassName("member-link"));
                    //  console.log(temp.getElementsByClassName("member-link")[0]);
                    //  console.(doom.getElementsByClassName("member-link"))


                } catch (err) {
                    console.error(err)
                }
            });
    }
}