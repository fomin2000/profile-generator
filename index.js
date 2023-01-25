const inquirer = require('inquirer')

const Manager = require("./lib/manager")
const Intern = require("./lib/intern")
const Engineer = require("./lib/engineer")



var team = []


const createManager = () => {
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter the managers full name:'
        },
        {
            name: 'id',
            type: 'input',
            message: 'Enter the managers ID:'
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter the managers email address:'
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'Enter the managers office number:'
        }
    ])
    .then((response) => {
        const { name, id, email, officeNumber } = response 
        const manager1 = new Manager(name, id, email, officeNumber)
        team.push(manager1)
        console.log(`${name} has been added to the board!`)
    })
}



const questionRole = () => {
    return inquirer.prompt([
        {
            name: 'role',
            type: 'list',
            choices: ['Engineer', 'Intern'],
            message: 'Select a role for the employee:'
        },
    ]).then((response) => {
        console.log(response.role)
        if (response.role === 'Engineer' ) {
            createEngineer()
        } else {
            createIntern()
        }
    })
}


const createEngineer = () => {
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter the engineers full name:'
        },
        {
            name: 'id',
            type: 'input', 
            message: 'Enter the engineers ID:'
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter the engineers email:'
        },
        {
            name: 'github',
            type: 'input',
            message: 'Enter the engineers GitHub username:'
        }
    ]).then((response) => {
        const { name, id, email, github } = response
        const employee1 = new Engineer(name, id, email, github)
        team.push(employee1) 
        console.log(`${name} has been added to the board!`)
        confirmAddition()
    })
}



const createIntern = () => {
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter the interns full name:'
        },
        {
            name: 'id',
            type: 'input', 
            message: 'Enter the interns ID:'
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter the interns email:'
        },
        {
            name: 'school',
            type: 'input',
            message: 'Enter the interns school:'
        }
    ]).then((response) => {
        const { name, id, email, school } = response
        const intern1 = new Intern(name, id, email, school)
        team.push(intern1) 
        console.log(`${name} has been added to the board!`)
        confirmAddition()
    })
}


const confirmAddition = () => {
    return inquirer.prompt([
        {
            name: 'confirm',
            type: 'confirm',
            message: 'Would you like to add an additional employee?'
        }
    ]).then((response) => {
        console.log(response.confirm)
        if (response.confirm) {
            questionRole()
        } else {
            // write file
            console.log(team)
            console.log(team.Manager)
        }
    })
}


const init = async () => {
    try {
        await createManager();
        await questionRole();

    } catch (error) {
        console.log(error)
    }
}


init()




