const { writeNotFoundResponse } = require('../responseWriters');

class Controller {
    constructor (routeName) {
        this.routeName = routeName;

        this.getActions = {};
        this.postActions = {};
        this.putActions = {};
        this.deleteActions = {};
        this.patchActions = {};

        this.init();
    }

    init () {
        throw new Error('init() Not implemented');
    }

    addGetAction (path, action) {
        this.getActions[path] = action;
    }

    addPostAction (path, action) {
        this.postActions[path] = action;
    }

    addPutAction (path, action) {
        this.putActions[path] = action;
    }

    addDeleteAction (path, action) {
        this.deleteActions[path] = action;
    }

    addPatchAction (path, action) {
        this.patchActions[path] = action;
    }

    get (path) {
        return this.getActions[path];
    }

    post (path) {
        return this.postActions[path];
    }

    put (path) {
        return this.putActions[path];
    }

    delete (path) {
        return this.deleteActions[path];
    }

    patch (path) {
        return this.patchActions[path];
    }

    async handle (method, path, params, res) {
        let action = this[method](path);
        if (action) {
            await action(params, res);
        } else {
            writeNotFoundResponse(res);
        }
    }
}

module.exports = Controller;