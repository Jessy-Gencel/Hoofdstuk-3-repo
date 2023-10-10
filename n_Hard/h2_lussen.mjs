import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let gemiddelde = 0
let counter = 0
let totaal = 0

do{
    let getal = parseFloat(await userInput.question("Geef een getal in "))
    counter += 1
    totaal += getal
    gemiddelde = totaal/counter
    console.log("Het gemiddelde van alle getallen bedraagt " + gemiddelde)
}while (gemiddelde <= 25)
process.exit()