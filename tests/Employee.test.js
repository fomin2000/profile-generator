const Employee = require('../lib/employee')

const name = 'Paul Fomin'
const id = '1665722'
const email = 'pasha.fomin11@gmail.com'

describe('Employee', () => {
    describe('constructor', () => {
        it('should return an object containing a name, id, and email property when called with the new keyword', () => {
            const obj = new Employee(name, id, email)

            expect('name' in obj).toEqual(true)
            expect('id' in obj).toEqual(true)
            expect('email' in obj).toEqual(true)
        })
    })
})