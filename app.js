const capsule = {
  id: "bangseunghee",
  password: "305",
  email: "bangseunghee@example.com",
  getTotalDataString: function() {
    return `Id: ${this.id}, Password: ${this.password}, Email: ${this.email}`;
  }
};
console.log(capsule.getTotalDataString());
// Id: bangseunghee, Password: 305, Email: bangseunghee@example.com