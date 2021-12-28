const Searcher = require("./Searcher");

class WebSearcher extends Searcher {
    // TODO: be able to use multiple parsers,
    // and only use the most revelent results
    constructor () {
        // for now only use google search for revelent results
        super('googleSearch');
    }

    init () {
        // only validator and formatter for phone number
        // (possible to add more validators and formatters for other infos)
        this.addValidator('phoneNumber', 'frenchPhoneNumber');
        this.addFormatter('phoneNumber', 'frenchPhoneNumber');
    }
}

module.exports = WebSearcher;