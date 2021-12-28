const Controller = require("./Controller");
const WebSearcher = require("../Searcher/WebSearcher");

const { writeOKResponse, writeNotFoundResponse } = require("../responseWriters");

// action to search company and return a french phone number
const searchFrenchPhoneNumberAction = async (params, res) => {
    const searcher = new WebSearcher();

    const searchResult = await searcher.search(params);
    console.log(searchResult)
    // if a phone number is in the search results, return it
    if (searchResult.phoneNumber) {
        const frenchPhoneNumber = searchResult.phoneNumber;
        writeOKResponse(res, frenchPhoneNumber);
    } else {
        writeNotFoundResponse(res);
    }
};

// controller to handle company searchs
class SearchController extends Controller {
    constructor () {
        super('search');
    }

    init () {
        this.addGetAction("french-phone-number", searchFrenchPhoneNumberAction);
    }
}

module.exports = SearchController;