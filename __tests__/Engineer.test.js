
const Engineer = require('../lib/Engineer.js');

test('creates an engineer', () => {
    const employee = new Engineer('Matt','2',"mattpotwora@yahoo.com", "potworam");

    expect(employee.name).toBe('Matt');
    expect(employee.identification).toBe('2');
    expect(employee.email).toBe("mattpotwora@yahoo.com");
    expect(employee.github).toBe("potworam")
})
