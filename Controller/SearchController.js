const Controller = require("./Controller");
const WebSearcher = require("../Searcher/WebSearcher");

const { writeOKResponse, writeNotFoundResponse } = require("../responseWriters");

const searchFrenchPhoneNumberAction = async (params, res) => {
    const searcher = new WebSearcher();

    const searchResult = await searcher.search(params);

    if (searchResult.phoneNumber) {
        const frenchPhoneNumber = searchResult.phoneNumber;
        writeOKResponse(res, frenchPhoneNumber);
    } else {
        writeNotFoundResponse(res);
    }
};

class SearchController extends Controller {
    constructor () {
        super('search');
    }

    init () {
        this.addGetAction("french-phone-number", searchFrenchPhoneNumberAction);
    }
}

module.exports = SearchController;