let array = [1, 2, 3, 4, 5]
console.log(array.map((num) => num * 2))
console.log(array.map((num) => num * num))


let arrayStr = ['lorem', 'ipsum', 'dolor', 'sit']
console.log(arrayStr.map((el) => el.length))
console.log(arrayStr.map((el, idx) => idx + 1))
console.log(arrayStr.map((el, idx) => idx % 2 === 0 ? el[0].toUpperCase() + el.slice(1) : el))
console.log(arrayStr.map((el) => el.toUpperCase()))