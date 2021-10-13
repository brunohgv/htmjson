const parser = require('./')

describe('parser', () => {
    it('should create an empty html tag with a', () => {
        const parsed = parser.parseJson({})
        expect(parsed).toBe('<html></html>')
    })
})