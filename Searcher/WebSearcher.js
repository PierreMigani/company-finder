const Searcher = require("./Searcher");

class WebSearcher extends Searcher {
    constructor () {
        super('googleSearch');
    }

    init () {
        this.addValidator('phoneNumber', 'frenchPhoneNumber');
        this.addFormatter('phoneNumber', 'frenchPhoneNumber');
    }
}

module.exports = WebSearcher;