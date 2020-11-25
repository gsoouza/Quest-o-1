// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let l1,l2,l3: number;

l1=prompt("Digite um número para o lado 1:");
l1=eval(l1);
l2=prompt("Digite um número para o lado 2:");
l2=eval(l2);
l3=prompt("Digite um número para o lado 3:");
l3=eval(l3);

let triangulo: boolean = false;

if(l1<l2+l3 && l2 <l1+l3&& l3<l1+l2){
          triangulo=true;
                    document.write(`${triangulo}`)
                    }
                    else{
                         triangulo=false;
                              document.write(`${triangulo}`)
                              }