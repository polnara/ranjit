console.log("Welcome to my program");

// varibles :: used to store data. Data will be numbers, String, boolean, object. data will be changed.
// = (assignment operator) . == compare the elements. 
// ex : a = 10 => assigning 10 to the variable a.

var a = 10;

a = 30;

var b = 20;

b = 50;

a = b;

var str = "Harish";

var st = true;

var ages = [30,35,40,50,70,80];

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

// flow control statments

// classes and objects (Object oriented programming)

