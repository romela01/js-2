//  part 1
let n = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];

function summing(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        if(x[i]>0){
            sum += x[i];
        }
    }
    return sum;
}
summing(n);

// part 2
let n2 = [10, 50, 6, 7, 8, 11, 6, 3, 9]

function summing2(num){
    let summing =0;
    for(let item of num){
        summing +=item;
    }
    return summing;
}
summing2(n2)

// part 3
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
function test(x){
    if(x.isloggedin==true){
        return x.firstname +' '+ x.lastname
    }else{
        return false;
    }
}
test(user);

// part4
let numbers = [10,-3,-43, 50, 6, 7,-234, 8, 63, 11, 6, 3, 9];
function testing(x){
    let height = x[0]
    for(let num of numbers){
        if(num>height){
            height = num;
        }
    }
    return height;
}
testing(numbers)