class Student {
    //ALso
    //public FFname: string;
    //public age: number = 18;
    //public canVote: boolean = true;
    //public anything: any = "Jobee.Pk";
    //anything = 18;


    public Fname: string;
    public Lname: string;
    public fullname: string;

    constructor(Fname: string, Lname: string) {

        this.Fname = Fname;
        this.Lname = Lname;
        this.fullname = Fname + Lname;
        alert(this.fullname);
    }
    getNo() {

        alert("30");
    }



}

class SubsStudent extends Student
{
    constructor(){

        super("X", "Y");
    }
    getNO() {

        return super.getNo();   
    }

}