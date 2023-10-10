import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let getal1 = 0
let getal2 = 1
let limiet = parseInt(await userInput.question("Tot hoe ver wil je de rij van Fibonacci zien? "))

console.log(getal1)
for (let i = 0; i <= (limiet - 1);){
    i = getal1 + getal2
    console.log(i)
    getal2 = getal1
    getal1 = i
}
process.exit()