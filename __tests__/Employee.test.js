const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Ahmed', 10, 'alkhatib_ahmed1995@hotmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get employees name', () => {
    const employee = new Employee('Ahmed', 10, 'alkhatib_ahmed1995@hotmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employees id number', () => {
    const employee = new Employee('Ahmed', 10, 'alkhatib_ahmed1995@hotmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employees email address', () => {
    const employee = new Employee('Ahmed', 10, 'alkhatib_ahmed1995@hotmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('get employees role', () => {
    const employee = new Employee('Ahmed', 10, 'alkhatib_ahmed1995@hotmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 