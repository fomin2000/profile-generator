
const Engineer = require('../lib/engineer')

const name = 'Paul Fomin'
const id = '1665722'
const email = 'pasha.fomin11@gmail.com'
const github = 'pfomin'

describe('Engineer', () => {
    describe('constructor', () => {
        it('Return name, id, email, role, and github properties', () => {
            const obj = new Engineer (name, id, email, github)

            expect('name' in obj).toEqual(true)
            expect('id' in obj).toEqual(true)
            expect('email' in obj).toEqual(true)
            expect('github' in obj).toEqual(true)
        })
    })
})