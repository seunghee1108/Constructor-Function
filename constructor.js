function Capsule(id, password, email) {
  this.id = id;
  this.password = password;
  this.email = email;

  this.getTotalDataString = function() {
    return `Id: ${this.id}, Password: ${this.password}, Email: ${this.email}`;
  }
};

const capsule1 = new Capsule("bangseunghee", "305", "bangseunghee@example.com");

console.log(capsule1.getTotalDataString());
// Id: bangseunghee, Password: 305, Email: bangseunghee@example.com