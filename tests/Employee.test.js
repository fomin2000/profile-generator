const Employee = require('../lib/employee')

const name = 'Paul Fomin'
const id = '1665722'
const email = 'pasha.fomin11@gmail.com'

describe('Employee', () => {
    describe('constructor', () => {
        it('Return name, id, and email properties', () => {
            const obj = new Employee(name, id, email)

            expect('name' in obj).toEqual(true)
            expect('id' in obj).toEqual(true)
            expect('email' in obj).toEqual(true)
        })
    })
})