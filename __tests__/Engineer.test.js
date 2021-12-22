const Engineer = require('../lib/Engineer');

test('create Engineer object', () => {
    const engineer = new Engineer('Ahmed', 10, 'alkhatib_ahmed1995@hotmail.com', 'AhmedAlkh');
    expect(engineer.github).toEqual(expect.any(String));
});

test('get engineers github username', () => {
    const engineer = new Engineer('Ahmed', 10, 'alkhatib_ahmed1995@hotmail.com', 'AhmedAlkh');
    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get employees role', () => {
    const engineer = new Engineer('Ahmed', 10, 'alkhatib_ahmed1995@hotmail.com', 'AhmedAlkh');
    expect(engineer.getRole()).toEqual("Engineer");
});