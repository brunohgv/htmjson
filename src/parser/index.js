const utils = require('./utils')

function parseJson(jsonSchema) {
    const content = utils.parseTags(jsonSchema)
    return `<html>${content}</html>`
}

module.exports = {
    parseJson
}