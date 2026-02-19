// let obj = null
// console.log(obj?.prop ?? "noolish coalesce")



// SORTING FUN
const comparisonFuc = (a, b) => {
    return a - b
}
const newArray = [1, 2, 3, 4, 5, 23, 2, 23, 53, 34, 7, 7, 4, 6, 45.45]
const resultsArray = newArray.sort(); // this will compares the arrays's elements as string so the element compared by string case thats why it returns  [1, 2, 2, 23, 23, 3, 34, 4,4, 45.45, 5, 53, 6, 7, 7]
// console.log("newSOrted Array", resultsArray)
// const sortedArray = newArray.sort(comparisonFuc)
// now deleting the repeated elements in an array
// const uniqueArray = Array.from(new Set(sortedArray))
//More concise way and efficient way to make an array without using set to make unique array and delete repeating arrays'elements
const sortedArray = newArray.sort(comparisonFuc)
// const uniqueArray = [...new Set(sortedArray)]
// By using filter method in JS which iterates over an array and keep the elements that statify the given condition
const uniqueArray = newArray.filter((val, index, array) => {
    return array.indexOf(val) === index
})
// console.log("uniqueFilteredArray", uniqueArray)




// Filters method in JS
// This is a built in JS method which is used to filters somethings from an array on a specific condition
const givenArray = [3.4, 23, 23, 245, 66, "hello", "abdullah", undefined, null, {
    name: "qasim", rollNumber: 2
}]
const findedGIvenArray = givenArray.filter((val, i, array) => {
    return (
        array.indexOf(val) === number
    )
})
console.log("givenArray", findedGIvenArray)

