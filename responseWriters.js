const writeResponse = (response, statusCode, data = null) => {
    response.writeHead(statusCode);
    if (data) {
        response.write(data);
    }
}

const writeOKResponse = (response, data) => {
    writeResponse(response, 200, data);
}

const writeNotFoundResponse = (response, data) => {
    writeResponse(response, 404, data);
}

const writeInternalErrorResponse = (response, data) => {
    writeResponse(response, 500, data);
}

module.exports = {
    writeOKResponse,
    writeNotFoundResponse,
    writeInternalErrorResponse,
};
