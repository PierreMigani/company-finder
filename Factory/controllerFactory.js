const SearchController = require("../Controller/SearchController");

const controllerFactory = (routeName) => {
    switch (routeName) {
        case 'search':
            return new SearchController();
    }

    return null;
}

module.exports = controllerFactory;