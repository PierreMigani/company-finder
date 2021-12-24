const cheerio = require('cheerio');
const axios = require('axios');
const { URLSearchParams } = require('url');

const Parser = require('./Parser.js');

class WebParser extends Parser {
    constructor (webpageBaseUrl, infoSelectors = {}, requestHeaders = {}) {
        super();
        this.webpageBaseUrl = webpageBaseUrl;
        this.infoSelectors = infoSelectors;
        this.requestHeaders = requestHeaders;
    }

    buildUrl (params) {
        const urlParams = new URLSearchParams(this.getUrlParams(params));

        return `${this.webpageBaseUrl}?${urlParams.toString()}`;
    }

    getUrlParams (params) {
        throw new Error("getUrlParams() Not implemented");
    }

    parse (params) {
        const foundInfos = {};
        const url = this.buildUrl(params);
        console.log(`Fetching ${url}`);

        return axios.get(url, { headers: this.requestHeaders })
            .then((response) => {
                if (response.status === 200) {
                    const html = response.data;
                    const $ = cheerio.load(html);

                    for (const [info, selector] of Object.entries(this.infoSelectors)) {
                        foundInfos[info] = $(selector).text();
                    }

                    return foundInfos;
                }

                return null;
        }, (error) => null );

    }
}

module.exports = WebParser;