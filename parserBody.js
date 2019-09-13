const superagent = require('superagent');

module.exports = {
    test: async function () {
        superagent.get('https://www.marathonbet.ru/su/popular/Football?page=1&pageAction=getPage&_=1568307791615')

            .end((err, res) => {
                let data = res.text;
                try {
                    const resdata = JSON.parse(data)
                    console.log(resdata[0].content)
                    //   console.log(resdata[1])
                } catch (err) {
                    console.error(err)
                }
            });
    }
}