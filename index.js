// node dependencies
const fs = require("fs");
const inquirer = require("inquirer");

console.log("-------------------- BMI CALCULATOR --------------------");

// questions
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid name";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "height",
    message: "What is your height?(m)",
    validate: (answer) => {
      if (isNaN(answer)) {
        return "please enter a valid number";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "weight",
    message: "What is your weight?(kg)",
    validate: (answer) => {
      if (isNaN(answer)) {
        return "please enter a valid number";
      }
      return true;
    },
  },
];

// inquirer prompts
inquirer.prompt(questions).then((answers) => {
  // BMI = weight / height*2
  const height = answers.height;
  const weight = answers.weight;
  const BMI = Math.floor(weight / (height * height));

  if (BMI < 18) {
    console.log(
      `Hi ${answers.name}, your BMI is ${BMI}. You're in the underweight range.`
    );
  } else if (BMI > 18 && BMI < 25) {
    console.log(
      `Hi ${answers.name}, your BMI is ${BMI}. You're in the healthy range.`
    );
  } else if (BMI > 25) {
    console.log(
      `Hi ${answers.name}, your BMI is ${BMI}. You're in the overweight range.`
    );
  }
});
