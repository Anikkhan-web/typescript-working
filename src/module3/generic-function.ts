
// //Arrow function
// const createArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
//     return [param1, param2]
// }
// function createArray1<X, Y>(param1: X, param2: Y): [X, Y] {
//     return [param1, param2]
// }
// const result1 = createArray<string, string>("anik", "khan");
// const result2 = createArray<boolean, Array<string>>(true, ["usa"])

// type Name = {
//     name: string
// }
// const result3 = createArray<Name, Name>({ name: 'Anik' }, { name: 'khan' })

// //spread Operator
// const crush = 'crush'
// const myInfo =
// {
//     name: 'Anik',
//     age: 28,
//     salary: 10000000
// }
// // const newData = { ...myInfo, crush }
// const addMeInCrushMind = <T>(myInfo: T) => {
//     const crush = 'None';
//     const newData = { ...myInfo, crush }
//     return newData
// }

// const result5 = addMeInCrushMind(myInfo)
// result5.age