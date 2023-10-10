import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Kies je eerste getal "))
let getal2 = parseFloat(await userInput.question("Kies je tweede getal "))
let i = 0

if (getal1 > getal2){
    i = getal2
}else{
    i = getal1
}

let denominatorNotFound = true
 while (denominatorNotFound == true){
    if (getal1 % i == 0 && getal2 % i == 0){
        console.log("De grootste gemeenschappelijke deler is " + i)
        denominatorNotFound = false
    }else{
        i += -1
    }
}
process.exit()

