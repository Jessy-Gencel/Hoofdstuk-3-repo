import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question("Kies de hoogte van de piramide? "))
let amount_whitespace = 0

for (let i = 1; i <= hoogte; i += 2){
    amount_whitespace = (hoogte - i)/2
    console.log(" ".repeat(amount_whitespace) + "*".repeat(i))
}
for (let i = (hoogte -2); i >= 0; i -=2){
    amount_whitespace = (hoogte - i)/2
    console.log(" ".repeat(amount_whitespace) + "*".repeat(i))
}
process.exit()