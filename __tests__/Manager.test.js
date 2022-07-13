const Manager = require('../lib/Manager.js');

test('creates an Manager', () => {
    const employee = new Manager('Matty','3',"mattypotwora@yahoo.com", "101");

    expect(employee.name).toBe('Matty');
    expect(employee.identification).toBe('3');
    expect(employee.email).toBe("mattypotwora@yahoo.com");
    expect(employee.officeNumber).toBe("101")
})
