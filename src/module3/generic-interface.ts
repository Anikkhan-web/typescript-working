
// //Generic Interface
// interface CrushInterface<T, U = null> {
//     name: string
//     husband: T,
//     wife?: U,

// }
// interface PersonInterface {
//     name: string,
//     age: number,
//     other: string
// }
// const crush4: CrushInterface<PersonInterface, PersonInterface> = {
//     name: 'Anik',
//     husband: {
//         name: 'khan',
//         age: 28,
//         other: 'sad'
//     },
//     wife: {
//         name: 'none',
//         age: 25,
//         other: 'new'
//     },

// }

// const crush1: CrushInterface<boolean, string> = {
//     name: 'none',
//     husband: true,
//     wife: 'non'
// }
// const crush2: CrushInterface<string> = {
//     name: 'none',
//     husband: "Anik"
// }

// interface husbandInterface {
//     name: string,
//     salary: number
// }
// const crush3: CrushInterface<husbandInterface> = {
//     name: 'none',
//     husband: {
//         name: 'Anik',
//         salary: .01
//     }
// }





// type GenericTruple<X, Y> = [X, Y]
// const relation: GenericTruple<string, string> = ['Anik', 'khan']

// // type relationWithSalaryType = {
// //     name: string; salary: number
// // }

// interface relationWithSalaryInterface {
//     name: string;
//     salary: number
// }

// const relationWithSalary: GenericTruple<relationWithSalaryInterface, string> = [
//     {
//         name: 'Anik',
//         salary: 1000000000
//     },
//     'khan'
// ]


// type GenericArray<T> = Array<T>

// const rollNumbers: GenericArray<number> = [44, 3, 354, 3]
// const rollNumbersString: GenericArray<string> = ['44', '3', '354', '3']
// const rollNumbersBoolean: GenericArray<boolean> = [true, false]

// type NameRollType = { name: string; roll: number }
// const userNameAndRollNumbers: GenericArray<NameRollType> = [{
//     name: "MR X",
//     roll: 1
// },
// {
//     name: "MR Y",
//     roll: 2
// }]