const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('Employee Subclass', () => {
        it('should be an instance of Employee', () => {
            
            
            expect(Manager.prototype instanceof Employee).toEqual(true)
        })
    })
})