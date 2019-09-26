import {Calculator} from './calculator';
import {AddService} from './addService';
import {MultiplyService} from './multiplyService';
import {Demo} from './demo';
var a:number = 10;

var b:string = "Harish";

var c:boolean = true;

let y:number = 50;

// function declaration
function add(a:number, b:number){
	return a + b;
} 

let addResult = add(10,30);
console.log("Addition Result :: "+addResult);

let addService:AddService = new AddService();
let mulService:MultiplyService = new MultiplyService();

let cal = new Calculator(40,60,addService, mulService);
console.log("addition Result :: "+cal.add());
console.log("Multiplication Result :: "+cal.multiply());

console.log("Version :: "+Calculator.version);

console.log(cal.calculation);

let d = new Demo();
d.display();

