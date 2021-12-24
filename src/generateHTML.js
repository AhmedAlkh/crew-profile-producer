const createManagerCard = function(manager) {
    return `
          <div class="cards">
              <div class="cardTop">
                  <h3>${manager.name}</h3>
                  <h4>Manager</h4>
              </div>
              <div class="cardBottom">
               <p>ID: ${manager.id}</p>
                  <p>EMAIL:Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                  <p>Office Number: ${manager.officeNumber}</p>
              </div>
          </div>
        `;
  };
  
  const createEngineerCard = function(engineer) {
    return `
      <div class="cards">
          <div class="cardTop">
              <h3>${engineer.name}</h3>
              <h4>Engineer</h4>
          </div>
          <div class="cardBottom">
           <p>ID: ${engineer.id}</p>
              <p>EMAIL:Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>
      </div>
    `;
  };
  
  const createInternCard = function(intern) {
    return `
      <div class="cards">
          <div class="cardTop">
              <h3>${intern.name}</h3>
              <h4>Intern</h4>
          </div>
          <div class="cardBottom">
           <p>ID: ${intern.id}</p>
              <p>EMAIL:Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
              <p>School: ${intern.school}</p>
          </div>
      </div>
    `;
  };
  
  generateHTML = (data) => {
    
    cardsArray = [];
  
    for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole();
  
      if (role === "Manager") {
        const managerCard = createManagerCard(employee);
  
        cardsArray.push(managerCard);
      }
  
      if (role === "Engineer") {
        const engineerCard = createEngineerCard(employee);
  
        cardsArray.push(engineerCard);
      }
  
      if (role === "Intern") {
        const internCard = createInternCard(employee);
  
        cardsArray.push(internCard);
      }
    }
  
    const employeeCards = cardsArray.join('');
  
    const generateCrew = generatePage(employeeCards);
    return generateCrew;
  };
  
  const generatePage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>The Dream Team</title>
        <link rel="stylesheet" href="./dist/styles.css"/>
      </head>
      <body>
        <header>
          <h1>The Dream Team</h1>
        </header>
    
        <main>
          <div class="container">
            <!-- Cards -->
            ${employeeCards}
          </div>
        </main>
      </body>
    </html>
    `;
  };

module.exports = generateHTML;