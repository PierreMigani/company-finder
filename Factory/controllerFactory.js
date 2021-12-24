const SearchController = require("../Controller/SearchController");

const controllerFactory = (routeName) => {
    let controller = null;
    switch (routeName) {
        case 'search':
            controller = new SearchController();
    }

    return controller;
}

module.exports = controllerFactory;