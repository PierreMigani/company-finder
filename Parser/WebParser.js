const cheerio = require('cheerio');
const axios = require('axios');
const { URLSearchParams } = require('url');

const Parser = require('./Parser.js');

class WebParser extends Parser {
    constructor (webpageBaseUrl, infoSelectors = {}, requestHeaders = {}) {
        super();

        // base url of the webpage
        this.webpageBaseUrl = webpageBaseUrl;

        // element selectors for specific infos
        // ( ex: { info: selector, ... } )
        this.infoSelectors = infoSelectors;

        // set request headers for axios
        this.requestHeaders = requestHeaders;
    }

    buildUrl (params) {
        const urlParams = new URLSearchParams(this.getUrlParams(params));

        return `${this.webpageBaseUrl}?${urlParams.toString()}`;
    }

    getUrlParams (params) {
        throw new Error("getUrlParams() Not implemented");
    }

    // get data with axios
    async getData (url) {
        const response = await axios.get(url, { headers: this.requestHeaders });
        console.log(url)
        if (response.status === 200) {
            return response.data;
        }

        return null;
    }

    async parse (params) {
        const foundInfos = {};

        // build complete url
        const url = this.buildUrl(params);

        // get search webpage raw html
        const html = await this.getData(url);

        if (html) {
            // load webpage with cheerio to be able to get specific elements
            const $ = cheerio.load(html);

            // get all element texts with the given selectors
            for (const [info, selector] of Object.entries(this.infoSelectors)) {
                if ($(selector).length > 0) {
                    // save the respective info
                    foundInfos[info] = $(selector).text();
                }
            }

            return foundInfos;
        }

        return null;
    }
}

module.exports = WebParser;