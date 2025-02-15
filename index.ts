#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {message: "Enter First Number", type: "number", name: "firstNumber"},
  {message: "Enter Second Number", type: "number", name: "secondNumber"},
  {message: "Select one operaotr", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"]}
]);

if(answer.operator === "Addition"){
    console.log("Your answer is " + (answer.firstNumber + answer.secondNumber))
}else if(answer.operator === "Subtraction"){
    console.log("Your answer is " + (answer.firstNumber - answer.secondNumber))
}else if(answer.operator === "Multiplication"){
    console.log("Your answer is " + (answer.firstNumber * answer.secondNumber))
}else if(answer.operator === "Division"){
    console.log("Your answer is " + (answer.firstNumber / answer.secondNumber))
}else{
    console.log("An Error Occurred")
}