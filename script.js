
let options = {
    name: 'Alena',
    age: 'very much',
    education: 'school of hysterics',

    disease: {
        genrerals: 'Covid-19',
        temperature: 36.8
    },
    makeTest: function () {
        console.log('Test')
    }
}


options.makeTest();
const { genrerals, temperature } = options.disease;
console.log(genrerals)

// for (const key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (const i in options[key]) {
//             console.log(i + ':' + options[key][i])
//         }
//     } else {
//         console.log(key + ':' + options[key])
//     }
// }
