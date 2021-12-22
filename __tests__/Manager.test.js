const Manager = require('../lib/Manager');

test('create Manager object', () => {
    const manager = new Manager('Ahmed', 10, 'alkhatib_ahmed1995@hotmail.com', 2);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get employees role', () => {
    const manager = new Manager('Ahmed', 10, 'alkhatib_ahmed1995@hotmail.com');
    expect(manager.getRole()).toEqual("Manager");
});