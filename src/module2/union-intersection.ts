// type NoobDeveloper = {
//     name: string,
// }
// // type JuniorDeveloper = {
// //     name: string,
// //     expertise: string,
// //     experience: number
// // }

// type JuniorDeveloper = NoobDeveloper & {

//     expertise: string,
//     experience: number
// }


// enum Level {
//     junior = 'junior',
//     mid = 'mid',
//     senior = 'senior'
// }
// type NextLevelDeveloper = JuniorDeveloper & {
//     leadershipExperience: number,
//     level: Level
// }

// const newDeveloper: NoobDeveloper | JuniorDeveloper = {
//     name: 'anik',
//     expertise: 'js',
//     experience: 6,

// }
// const developer: NextLevelDeveloper = {
//     name: 'next vhai',
//     expertise: 'Typescript',
//     experience: 6,
//     leadershipExperience: 1,
//     level: Level.junior

// }