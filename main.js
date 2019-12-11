console.log("Hello World!")
let company = 'Coding Academy'

console.log(company.length)

console.log(company.toUpperCase())
console.log(company.toLowerCase())
console.log(company.substring(0,6))
console.log(company.substr(7, 7))
console.log(company.slice(7, 14))
console.log('2' <= '22')
console.log('2' == 2)

let sent = 'You cannot end a sentence with because because because is a conjunction';
console.log(sent.match(/because/g))
console.log(sent.lastIndexOf('because'))
console.log(sent.search('because'))
console.log(sent.substr(31, 23))

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

for (let i = 0; i< countries.length; i++){
  console.log(countries[i].toUpperCase())

}

console.log('================================================')
for(let i = 0; i < countries.length; i++){

  if(countries[i].includes('a')){
    console.log(countries[i].toUpperCase())
  }
}


function areaOfCircle(radius){
  const pi = 3.14
  const area = pi*radius*radius

  return area.toFixed(2)
}

console.log(areaOfCircle(20))
console.log(areaOfCircle(10))


 function findEvenNumbers(n){
   
  let evenNum = []

  for (let k = 0; k <= n; k++){

    if(k %2 == 0){
      
      evenNum.push(k)
      
    }
    

 }
 return evenNum
 }

 console.log(findEvenNumbers(100))


 //sumOfEvens(n)

 function sumOfOdds(n){
   let sum = 0
   for (let k = 1; k <= n; k++){

      if (k % 2 == 1){
        sum = sum + k
      }
   }
   return sum
 }

 console.log(sumOfOdds(100))

 //calculateWeight, mass and gravity
 //weight = mass*gravity


 function calculateWeight (mass) {
   const gravity = 9.81
   const weight = gravity*mass

   return weight.toFixed(2)

 }

 console.log(calculateWeight(75))


 //square

 function square(n) {
    let double = n * n;
    return double

 }

 console.log(square(10))

 const squear = function (n){
   return n * n
 }

 console.log(squear(5))


 console.log('arrow function*')

 const sqwear = (n) => {
   return n**2
 }

 console.log(sqwear(8))

 const printFullName = (firstName, lastName) => {
   const gap = ' ';
   const fullName = firstName + gap + lastName

   return fullName
 }

 console.log (printFullName('Jane', 'Doe'))


 const sumOfAllNums = (n) => {
  let sum = 0;
  for (i = 0; i <= n; i++){
    sum = sum + i;
  }

  return sum
 }

 console.log(sumOfAllNums(100))

 console.log('Explicit return for arrow functions* for only oneliners')

 const addTwoNums = (p, q) => p + q
 console.log(addTwoNums(5, 6))


 //sumNumsInArray

 function sumNumsInArray(n) {
   let numbs = []
   let adds = 0
   
   for (i = 0; i <= n; i++){
     numbs.push(i)
     
     adds = adds + i;

   }
   console.log(numbs)
   return adds
 }

 console.log(sumNumsInArray(10))

 console.log('Array numbers!')

 const sumNumbsInArray = arr => {
   let sum = 0

   for(const num of arr ) {
     sum = sum + num
   }
   return sum
 }

 console.log(sumNumbsInArray ([7, 8, 9]))

 const reverseArray = arr => {
   const newArray = []
  for (let i = arr.length -1; i >= 0; i--){
      newArray.push(arr[i])

  }
  return newArray
 }

 console.log(reverseArray([10,2,3]))

 console.log('new')
   

 const arrayOfSevenRandomNums = (n = 7) => {

  const array = []

  for (let i = 0; i < n; i++ ){
    let newArr = Math.ceil(Math.random()* 10)

    array.push(newArr)
  }
  return array
 }
 
 console.log (arrayOfSevenRandomNums ())

console.log('is even')


const isEven = (n) => {

  if (n % 2 == 0) {

    return true
  }
  else {
    return false
  }
}

console.log(isEven(7))