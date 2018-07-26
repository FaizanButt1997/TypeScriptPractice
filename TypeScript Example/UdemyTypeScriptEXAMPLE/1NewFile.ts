    




//Data Types

var number: number = 1

//number = 1235465;
//console.log(number)

var isCapable: boolean = true;

var  NAME: string="Faizan";


var string_arr: string[] = ["Fahad", "Ali", "Usman", "Faizan"];

//Any datatype store in array

var any_arr: any[] = ["Fahad", true, 123456, 0.5, 'A'];


//Enum

enum EOrderInfo { Delievered=0, Pending, Cancelled, Late };

console.log(EOrderInfo.Pending);

//For Break point in java script we used  keyword

//debugger



//FUnctions

function Getname(): void {


    console.log("Winter is coming !!!")
}

function OneParameterReceive(string: number): void {
    console.log("Hello" + string);

}

function ReturnValue(number: number): number {

    return number + 231;

}


//Interface

interface IPersoDetails {
    name: string;
    CNIC?: number;
    
}

function PrintInterface(persondetails:IPersoDetails) {

    alert(persondetails.name + persondetails.CNIC);
}


//Classes

class Student {

    public name: string;
    private RollNumber: number;
    //Constructor
    constructor() {

        this.name = "Faizan"
    }

    //Setter
    public SetRollNumber(n: number): void {

        this.RollNumber = n;
    }

    //Getter
    public GetRollNumher(): number {

        return this.RollNumber;
    }

    //Functions

    public PrintStudent(): void {
        console.log(this.name);
        console.log(this.GetRollNumher())

    }
}
    //Inheritance



class Person {
    public name: string;
    constructor(name: string) {

        this.name = name;
    }
    dance() {

        console.log(this.name+"is dancings")
    }


}

class AwesomePerson extends Person {

    dance() {

        console.log("so awesome");
        super.dance();
    }
}

