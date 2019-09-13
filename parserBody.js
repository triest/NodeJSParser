const superagent = require('superagent');

module.exports = {
    test: async function () {
        superagent.get('https://www.marathonbet.ru/su/popular/Football?page=1&pageAction=getPage&_=1568307791615')

            .end((err, res) => {
                let data = res.text;
                try {
                    const resdata = JSON.parse(data)
                    let prop = resdata[1].prop;
                    let content = resdata[0].content;
                    console.log(content);
                    let linkElement = content.getElementByClassName("member-link");
                } catch (err) {
                    console.error(err)
                }
            });
    }
}