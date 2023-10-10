import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let primeNumber = true
let getal = await userInput.question("kies een getal en ik vertel je of het een priemgetal is. ")
for (let i = 2 ; i < getal ; i++){
    if (getal % i == 0){
        primeNumber = false
    }
}
if (primeNumber == false){
    console.log("Het is geen priemnummer")
}else{
    console.log("Het is wel een priemnummer")
}
process.exit()