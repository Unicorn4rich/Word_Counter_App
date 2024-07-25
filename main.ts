#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"


// Welcome message
console.log(chalk.bold.italic.bgCyan("\n\t <<<<<<<<< WELCOME TO WORDS & CHARACTERS APP >>>>>>>>> \n"))


// Veriable for loop
let condition = true;


// <------------------------------------------END------------------------------------------>
// Question to Users and Get answers


do {     // Using do while loop

const Word_Counter: {
    Sentence: string,
    Ask: string,

} = await inquirer.prompt([

    {
       name: "Sentence",
       message: chalk.bold.cyan("\n ENTER YOUR SENTENCE TO COUNT THE WORDS AND CHARACTERS:"),
       type: "input"
    },
    {
        name: "Ask",
        message: chalk.bold.cyan("\n PLEASE CHOOSE OPTION WHAT YOU WAN TO COUNT?"),
        type: "list",
        choices: ["WORDS", "CHARACTERS"]
    }

]);

// <------------------------------------------END------------------------------------------>
// Old Method

// if(Word_Counter.Ask === "WORDS"){

//     let Words = Word_Counter.Sentence.trim().split(" ");
//     console.log(Words);
//     console.log(`YOUR SENTENCE WORD COUNT IS: ${Words.length}`);

// }

// <------------------------------------------END------------------------------------------>
// New Method

// Words count Code
if(Word_Counter.Ask === "WORDS"){

    let Words = Word_Counter.Sentence.trim().split(" ").filter((item: any) => item.length > 0).length;

    if(Word_Counter.Sentence !== ""){
        console.log(chalk.bold(`\n YOUR WORDS COUNT IS: ${Words}`));
    }
}

// <------------------------------------------END------------------------------------------>
// Chracters Counting Code

else if(Word_Counter.Ask === "CHARACTERS"){

    let Characters = Word_Counter.Sentence.trim().split(" ").join("").length;

    if(Word_Counter.Sentence !== ""){
        console.log(`\n YOUR CHARACTERS COUNTING IS: ${Characters}`);
    }
}


// <------------------------------------------END------------------------------------------>
// User Choose for loop action

let Repeat = await inquirer.prompt([
    {
        name: "app",
        message: chalk.bold.cyan("\n DO YOU WANT TO MORE COUNT?"),
        type: "confirm",
        default: true
    }
]);


// give condition to veriable
if(Repeat.app === false){
    condition = false;
}


} while(condition)


// <------------------------------------------END------------------------------------------>
// Thanks message

console.log(chalk.bold.italic.bgCyan("\n \t <<<<<<<<<<<<<< THANKS FOR PARTICIPATE >>>>>>>>>>>>> "));


// <------------------------------------------END------------------------------------------>
// Notes

// Words => (SHOAIB) aik pore jumly ko kehty hain.
// Character => (S H O A I B) words ke aik aik alphbet ko kehty hain

// .trim() ka method Words ke Up, Down or Right, Left se white spaces khatam kar deta hai
//  but unke beech wali spaces khatam nahi kar sakta...

// .split(" ") ka method String text ko array Elements mein convert kar ke aik array mein return karta hai
// agr spli("") mein space nahi denge to ye words ko characters bana kar returns karega...