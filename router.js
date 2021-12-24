const url = require('url');
const { writeNotFoundResponse, writeInternalErrorResponse } = require('./responseWriters');

const controllerFactory = require('./Factory/controllerFactory');

const router = (req, res) => {
    console.log('test');

    const { query, pathname } = url.parse(req.url, true);

    const method = req.method.toLowerCase();

    // get only the first part of the pathname
    const routeName = pathname.split('/')[1];

    // get rest of pathname
    const actionPath = pathname.split('/').slice(2).join('/');
    
    console.log(`${method} ${pathname} ${routeName} ${actionPath}`);

    // get controller by route name
    const controller = controllerFactory(routeName);

    if (controller) {
        // execute controller action
        controller.handle(method, actionPath, query, res)
            .then(() => res.end())
            .catch(err => {
                writeInternalErrorResponse(res, err);
            });
    } else {
        // return not found error if no controller found
        writeNotFoundResponse(res);
        res.end();
    }
}

module.exports = router;