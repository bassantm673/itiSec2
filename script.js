//Exercise 1:
let nameSearch;
let names=[]

for (let i = 1 ;i<=5;i++){
let name =prompt(`Enter${i} name`)
names.push(name)
}
console.log(names)
nameSearch = prompt(" enter a name to search about it ") 

if(names.includes(nameSearch)){
    let indexName=names.indexOf(nameSearch)+1
alert(`the order of ${nameSearch} is ${indexName}${(indexName==1)?"st":(indexName==2)?"nd":(indexName==3)?"rd":"th"}`)
}else{
    alert("The name is not found")
}

// -----------------------------------------------------
// Exercise 2:
let sentence=prompt("enter strings to count words in it")
const sentenceArr=sentence.split(" ")
alert(`${sentenceArr.length} words`)

// -----------------------------------------------------
// Exercise 3:
let origString=prompt("Enter strings")
let char1=prompt("Enter 1st character")
let char2=prompt("Enter 2nd character")

if(origString.includes(char1) && origString.includes(char2)){
    alert( origString.slice(origString.indexOf(char1)+1, origString.indexOf(char2)))
}else{
    alert("the character does not exist")
}

//---------------------------------------------------------------------
//Exercise 4:

let contine= true
let factorialCalc = function () {
    let fact = 1
    let number = Number(prompt("Enter a number "))
    if(isNaN(number)){
        alert("please enter a number")
        factorialCalc()
    }else{
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    alert(`${number}! = ${fact}`)
}}
factorialCalc()
while(contine){
    let conf=confirm("you want calc another thing?")
    if(conf===true){
        factorialCalc()
    }else{
        contine= false
    }
    
}
//--------------------------------------------------
//Exersice 5
const  vowels=["a","e","o","i","u"]
function extractVowels(input){
    const vowelsExisting=[]
    for(character of input.toLowerCase()){
        for(let i=0;i<vowels.length;i++){
            if(character===vowels[i]){
                vowelsExisting.push(character)
            }
        }
    }
    console.log(`number of vowels= ${vowelsExisting.length} are ${vowelsExisting}`)
}
extractVowels(prompt("Enter a string"))
//------------------------------------------------------
//Exersice 6
let employes=prompt("Enter employees names in a comma separated").toLocaleLowerCase().split(",")
console.log(employes)
let empSalary=(prompt("Enter salary in a comma separated").split(","))
empSalary=empSalary.map(Number)
console.log(empSalary)
let maxSalary;
if(employes.length!==empSalary.length){
    alert("❌❌❌that the count does not match.")
    
}else{
    let inform=""
    for(let i=0;i<empSalary.length;i++){
        inform +=
        `
        name: ${employes[i]} and salary=${empSalary[i]}
        `
    }
    alert(inform)
    maxSalary=Math.max(...empSalary);
    let indexofMaxSalary=empSalary.indexOf(maxSalary)
    alert(`employee with the highest salary is ${employes[indexofMaxSalary]} and salary=${empSalary[indexofMaxSalary]}`)

}

let askEmployee=prompt(" insert a name of an employee").toLocaleLowerCase()
if(employes.includes(askEmployee)){
    let indexOfInsertEmp= employes.indexOf(askEmployee)
    alert(`name: ${employes[indexOfInsertEmp]} and his salary= ${empSalary[indexOfInsertEmp]}`)
}else {
    alert("There is no employee with this name ")
}
