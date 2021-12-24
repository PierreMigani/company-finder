const parserFactory = require("../Factory/parserFactory");
const formatterFactory = require("../Factory/formatterFactory");
const validatorFactory = require("../Factory/validatorFactory");

class Searcher {
    constructor (parserName) {
        this.parserName = parserName;
        this.formatters = {};
        this.validators = {};
    
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

    async search (params) {
        const parser = parserFactory(this.parserName);

        const data = await parser.parse(params);
        console.log(this.validateAndFormatData(data));
        return this.validateAndFormatData(data);
    }

    validateAndFormatData (data) {
        const formattedData = {};

        for (const [paramName, param] of Object.entries(data)) {
            if (this.validators[paramName] && this.formatters[paramName]) {
                const validator = validatorFactory(this.validators[paramName]);
                if (validator && !validator.validate(param)) {
                    continue;
                }

                const formatter = formatterFactory(this.formatters[paramName]);
                console.log(formatter)
                formattedData[paramName] = formatter ? formatter.format(param) : param;
            }
        }

        return formattedData;
    }
}

module.exports = Searcher;