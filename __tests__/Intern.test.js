
const Intern = require('../lib/Intern.js');

test('creates an intern', () => {
    const employee = new Intern('Madison','4',"madisonpotwora@yahoo.com", "UOFO");

    expect(employee.name).toBe('Madison');
    expect(employee.identification).toBe('4');
    expect(employee.email).toBe("madisonpotwora@yahoo.com");
    expect(employee.school).toBe("UOFO")
})
