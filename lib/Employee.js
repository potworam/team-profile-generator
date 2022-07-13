
function Employee(name,identification,email){
    this.name = name;
    this.identification = identification;
    this.email = email;

    const getName = function() {
        return this.name;
      };
      const getIdentification = function() {
          return this.identification
      };
      const getEmail = function() {
        return this.email
    };
    const getRole = function(){
        return `employee`;
    }
}

module.exports = Employee