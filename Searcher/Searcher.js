const parserFactory = require("../Factory/parserFactory");
const formatterFactory = require("../Factory/formatterFactory");
const validatorFactory = require("../Factory/validatorFactory");

class Searcher {
    constructor (parserName) {
        // name to be used to create the parser from factory
        this.parserName = parserName;

        // name of validators to be used for respective info validation
        // ex: { infoName: 'factoryNameOfValidator', ... }
        this.validators = {};
        
        // name of formatters to be used for respective info formatting
        // ex: { infoName: 'factoryNameOfFormatter', ... }
        this.formatters = {};
    
        this.init();
    }

    init () {
        throw new Error("init() Not implemented");
    }

    addFormatter (paramName, formatterName) {
        this.formatters[paramName] = formatterName;
    }

    addValidator (paramName, validatorName) {
        this.validators[paramName]  = validatorName;
    }

    // retrieve, validate and format data
    async search (params) {
        const parser = parserFactory(this.parserName);

        const data = await parser.parse(params);

        return this.validateAndFormatData(data);
    }

    validateAndFormatData (data) {
        const formattedData = {};

        for (const [paramName, param] of Object.entries(data)) {
            if (this.validators[paramName] && this.formatters[paramName]) {
                // validate data
                const validator = validatorFactory(this.validators[paramName]);
                if (validator && !validator.validate(param)) {
                    continue;
                }

                // format data
                const formatter = formatterFactory(this.formatters[paramName]);
                formattedData[paramName] = formatter ? formatter.format(param) : param;
            }
        }

        return formattedData;
    }
}

module.exports = Searcher;