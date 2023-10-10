import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let hoogte = await userInput.question("Kies de hoogte van de piramide? ")
let i = 1
let piramide = "*"
while (i <= hoogte){
    console.log(piramide.repeat(i))
    i+=1
}
process.exit()