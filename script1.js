let user3 = {
    age: 17,
    salary: 25000,
    creditMoney: 15000,
    getMytotal: function (){
        return this.salary + this.creditMoney;
    }
}

user3.age = 25;

let user2 = {
    age: 25,
    salary: 15700,
    creditMoney: 25000
}

function getComputer (user){
    let totalMoney;
    totalMoney = user.creditMoney + user.salary;
    console.log(totalMoney);
}

function taxes(user){
    return user.getMytotal()*0.13;
}

user2.salary = 35000;
console.log(user3.getMytotal());
console.log(getComputer(user2));