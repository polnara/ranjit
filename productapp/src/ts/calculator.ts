import {AddService} from './addService';
import {MultiplyService} from './multiplyService';
import {Calculate} from './calculate'
export class Calculator{
	// properties
	a:number; //40
	b:number; //60
	
	aService:AddService;
	mService:MultiplyService;
	
	calculation:Calculate = {"add":1,"multiply":2,"substract":3,"division":4}
	
	// static variables can access directly using Class name, without creating object.
	static version:number = 1.0;
	// we cannot create const at class level. we cannot reassign a value to const variables.
	// predifined type :: number, string, boolean
	// custom type ::AddService, MultiplyService
	constructor(a:number,b:number, additionService:AddService, mutiplicationService:MultiplyService ){
		this.a = a;
		this.b = b;
		this.aService = additionService;
		this.mService = mutiplicationService;
	}
	
	// methods
	add(){
		const type:string = "Laptop";
		//type = "Desktop";

		return this.aService.add(this.a, this.b) //100
	}
	
	multiply(){
		return this.mService.multiply(this.a, this.b) // 2400
	}
}
