const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Ahmed', 10, 'alkhatib_ahmed1995@hotmail.com', 'UofT');
    expect(intern.school).toEqual(expect.any(String));
});

test('get interns school', () => {
    const intern = new Intern('Ahmed', 10, 'alkhatib_ahmed1995@hotmail.com', 'UofT');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get employees role', () => {
    const intern = new Intern('Ahmed', 10, 'alkhatib_ahmed1995@hotmail.com', 'UofT');
    expect(intern.getRole()).toEqual("Intern");
});