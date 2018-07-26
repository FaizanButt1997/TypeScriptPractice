export class Student3GetSet {

    private _StudentName: string;
    private _Studentmarks: number;

    //In java Script Protected == Public 
    protected _test: string;


    public set StudentName(val: string) {

        if (val.length == 0) {

            throw "Please Enter Student Name";
        }
        else {

            this._StudentName = val;
        }
    }

    public get StudentName():string {

        return this._StudentName;

    }


    public set StudentStudentmarks(val: number) {

        if (val<60) {

            throw "Studentmarks must be greater then 60";
        }
        else {

            this.StudentStudentmarks = val;
        }
    }

    public get StudentStudentmarks(): number {

        return this.StudentStudentmarks;

    }


}


//class SubStudent3GetSet extends Student3GetSet {
        

//}