const createManagerCard = function (manager) {
  return `
  <div class="col-4 mt-4">
        <div class="card">
            <!-- top section -->
            <div class="bg-primary text-light">
                <h3 class="pt-2 pl-2 pb-2">${manager.name}</h3>
                <h4 class="pt-2 pl-2 pb-2"><i class="fas fa-user-tie"></i> Manager</h4>
            </div>

            <!-- bottom section -->
            <div class="bg-light">
                <p class="pt-2 pl-2 pb-2">ID: ${manager.id}</p>
                <p class="pt-2 pl-2 pb-2">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="pt-2 pl-2 pb-2">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
        `;
};

const createEngineerCard = function (engineer) {
  return `
  <div class="col-4 mt-4">
        <div class="card">
          <div class="bg-primary text-light">
                <h3 class="pt-2 pl-2 pb-2">${engineer.name}</h3>
                <h4 class="pt-2 pl-2 pb-2"><i class="fas fa-tools"></i> Engineer</h4>
            </div>

            <div class="bg-light">
                <p class="pt-2 pl-2 pb-2">ID: ${engineer.id}</p>
                <p class="pt-2 pl-2 pb-2">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="pt-2 pl-2 pb-2">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
        `;
};

const createInternCard = function (intern) {
  return `
  <div class="col-4 mt-4">
        <div class="card">
            <div class="bg-primary text-light">
                <h3 class="pt-2 pl-2 pb-2">${intern.name}</h3>
                <h4 class="pt-2 pl-2 pb-2"><i class="fas fa-user-graduate"></i> Intern</h4>
            </div>
            <div class="bg-light">
                <p class="pt-2 pl-2 pb-2">ID: ${intern.id}</p>
                <p class="pt-2 pl-2 pb-2">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="pt-2 pl-2 pb-2">School: ${intern.school}</p>
            </div>
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

  const employeeCards = cardsArray.join("");

  const generateCrew = generatePage(employeeCards);
  return generateCrew;
};

const generatePage = function (employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
  <body>
      <header>
          <div class="col-12 py-5 bg-danger">
            <div class="mb-0 h1 w-100 text-light text-center">The Dream Team</div>
          </div>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center">
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
    `;
};

module.exports = generateHTML;