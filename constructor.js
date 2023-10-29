// 생성자 함수 정의
// 함수 이름의 첫 글자는 대문자로 시작한다. 
function Capsule(id, password, email) {
  // this = {}; (빈 객체가 암시적으로 만들어짐)
  this.id = id;
  this.password = password;
  this.email = email;

  // getTotalDataString : 객체의 데이터를 문자열로 조합하여 반환한다.
  this.getTotalDataString = function() {
    return `Id: ${this.id}, Password: ${this.password}, Email: ${this.email}`;
  }
};

// 객체 생성
// 반드시 'new'연산자를 붙여 생성한다.
const capsule1 = new Capsule("bangseunghee", "305", "bangseunghee@example.com");
// const capsule2 = new Capsule("another", "123", "another@example.com");


// getTotalDataString 메서드 호출
console.log(capsule1.getTotalDataString());
// Id: bangseunghee, Password: 305, Email: bangseunghee@example.com
// console.log(capsule2.getTotalDataString());
// Id: another, Password: 123, Email: another@example.com