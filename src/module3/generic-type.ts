

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