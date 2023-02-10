const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('Employee Subclass', () => {
        it('should be an instance of Employee', () => {
            
            
            expect(Intern.prototype instanceof Employee).toEqual(true)
        })
    })
})