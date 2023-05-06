// //default parameter

// function add(num1: number, num2: number = 12): number {
//     return num1 + num2;
// }
// add(2, 5)

// const addArrow = (num1: number, num2: number): number => num1 + num2

// const arr = [1, 2, 4]
// const newArray = arr.map((element: number) => element * element)

// const person: {
//     name: string,
//     balance: number,
//     addBalance(money: number): void
// } = {
//     name: 'anik',
//     balance: 5,
//     addBalance(money: number) {
//         // console.log(`My New Balance is ${this.balance + money}`)

//     }
// }



// //spread iperator
// const myFriends = ['chandler', 'rs', 'new']
// const newFriends = ['cs', 'ds', 'ss']
// const myBestFriend = {
//     fullname: 'ab',
//     age: 53
// }

// //array and object destructuring


// const [bestFriend] = myFriends
// const { fullname: myFullName } = myBestFriend
// console.log(myFullName);




// myFriends.push(...newFriends)
// // console.log(myFriends);

// const greetFriends = (...friends: string[]): void => friends.forEach((friend) => console.log(`Hi ${friend}`))

// greetFriends('new', 'view', 'hue', 'en');
