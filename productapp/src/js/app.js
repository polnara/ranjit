console.log("Welcome to my program");

// varibles :: used to store data. Data will be numbers, String, boolean, object. data will be changed.
// = (assignment operator) . == compare the elements. 
// ex : a = 10 => assigning 10 to the variable a.
// Java script internally use data types. 
// Number, String, Boolean, Object

var a = 10;

a = 30;


var b = 20;

b = 50;

a = b;

var str = "Harish";

var st = true;

var ages = [30,35,40,50,70,80,90];
console.log("Size :: "+ages.length);

var emp = {"name":"Harish","age":30,"salary":50000,"designation":"software engineer","location":"Bengalore"}

console.log("a :: "+a);
console.log("b :: "+b);
console.log("str ::"+str);
console.log("st :: "+st);
console.log("ages :: "+ages);
console.log("emp :: ")
console.log(emp);

// operators
//  + , - ,/ ,% , ++ ,--
var p = 30;
var q = 60;
var r = p + q;
console.log("R :: "+r);//90


var c = a + b;

var d = a - b;

var e = a / b ; //quotient

var f = a % b; // remainder

var g = a++;

var h = b--;

console.log("C :: "+c); //100

console.log("D :: "+d); // 0

console.log("E :: "+e); // 1

console.log("F :: "+f); // 0

console.log("G :: "+g); // 51    50

console.log("H :: "+h); // 49    50
 
console.log("A :: "+a); // 50    51

console.log("B :: "+b); // 50    49
// methods or functions
	// method declaration
	var totalCalculation = function(){
		//statememt 1
		// statememt 2
		// statememt n
		var initialAmount = 10000;
		var interest = 100;
		var duration = 12;
		var totalInterestPerYear = interest * duration;
		
		var totalAmount = initialAmount + totalInterestPerYear;
		
		return totalAmount;
	}

	// method call
	var output = totalCalculation();
	console.log("Output :: "+output);
	
	// Method declaration
	// Arrow functions ( => )
	var calculate = () => {
		var initialAmount = 10000;
		var interest = 100;
		var duration = 12;
		var totalInterestPerYear = interest * duration;
		
		var totalAmount = initialAmount + totalInterestPerYear;
		
		return totalAmount;
	}
	
	// method call
	var output2 = calculate();
	console.log("Output1 :: "+output2);
	
// conditional statments
	var a = 11;
	if(a%2==0){
		console.log("Even")
	}else{
		console.log("Odd");
	}
	
// flow control statments
	for(var a = 0; a<5; a++){
		console.log("Hello world");
	}
	
	for(var a = 0; a<10; a++){
		if(a%2!=0)
			console.log(a);
	}

	for(var a = 0; a<ages.length; a++){
		var temp = ages[a] + 5;
		console.log(temp);
	}
	
//	while()
	
//	do while()
// classes and objects (Object oriented programming)

// class is a skeleton, which contain properties and methods
// Object is instance of class. For each class, we can create N number of objects.
// class which used to implement logic called business classes.
class Calculator{
	
	//num1 and num2 are properties. constructor will execute automatically. we will use constructor for property initilization.
	constructor(a , b){
		this.num1 = a ;
		this.num2 = b;
	}
	
	// method declaration
	add(){
		return this.num1 + this.num2;
	}
	
	// method declaration
	multiply(){
		return this.num1 * this.num2;
	}
	
}

// object creation
var cal = new Calculator(30,80);

// method call
var addResult1 = cal.add();
console.log("Addition Result :: "+addResult1);

var multiplyResult = cal.multiply();
console.log("Multiply Result :: "+multiplyResult);

// we can use class to hold data only. such classes called it as model classes
class Employee{
	constructor(n,a,s,d,addr){
		this.name = n;
		this.age = a;
		this.salary = s;
		this.designation = d;
		this.address = addr;
	}
}

var emp1 = new Employee("Harish",30, 1000000,"SE","Bengalore");
var emp2 = new Employee("Ganesh", 50, 5000000,"Mechanic","Hyderabad");
var emp3 = new Employee("Thirupathi",35,6000000,"Electrical","Chennai");

console.log("Employee 1 :: "+emp1);
console.log("Employee 2 :: "+emp2);
console.log("Employee 3 :: "+emp3);

// we can use function keyword for class creation also. But if it contain return statememt, then it is a function. otherwise it is a class.
function Address(hno,street,village,town,state){
		this.hno = hno;
		this.street = street;
		this.village = village;
		this.town = town;
		this.state = state;
	
}

var add1 = new Address("10","varthur","varthur","bengalore","karnataka");
console.log(add1);


// =====================================
// differnce between var and let. 
// var supports Hoisting.
// we can assign a value to the variable with out declare it : Hoisting
// Let doesn't support Hoisting.
x = 10;

var x;

console.log("X :: "+x);

let y = 20;

console.log(y);

