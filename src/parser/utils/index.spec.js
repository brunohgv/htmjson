const utils = require('./')

describe('utils', () => {
    describe('parseTag', () => {
        it('Should return empty string when json is empty', () => {
            const content = utils.parseTags({})
            expect(content).toBe('')
        })
    })
})