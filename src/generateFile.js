const fs = require('fs')

const generateHtml = (data) => {
    
    var htmlOpen = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
            <header class="header">
                <h1>Team Dashboard</h1>
            </header>
            <main class="main">
    `



    var htmlClose = `
            </main>
        </body>
    </html>
    `


    data.forEach(item => {
        const {name, id, email, role, officeNumber, git, school} = item

        if (role === 'Engineer') {
            htmlOpen += `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">Email: ${email}</p>
              <p class="card-text">GitHub: <a href="https://github.com/${git}">${git}</a></p>
            </div>
          </div>\n`
        }
        if (role === 'Intern') {
            htmlOpen += `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">Email: ${email}</p>
              <p class="card-text">School: ${school}</p>
            </div>
          </div>\n`
        }

        if (role === 'Manager'){
            htmlOpen += `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
              <p class="card-text">ID: ${id}</p>
              <p class="card-text">Email: ${email}</p>
              <p class="card-text">Office Number: ${officeNumber}</p>
            </div>
          </div>\n`
            
        }
    });

    fs.writeFile('./dist/company.html', htmlOpen+htmlClose, (err) => {
        if (err) {
            console.log(err)
        }
    })

}


//  