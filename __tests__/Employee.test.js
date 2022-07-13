
const Employee = require('../lib/Employee.js');

test('creates an employee', () => {
    const employee = new Employee('Matthew','1',"matthewpotwora@yahoo.com");

    expect(employee.name).toBe('Matthew');
    expect(employee.identification).toBe('1');
    expect(employee.email).toBe("matthewpotwora@yahoo.com");
})
