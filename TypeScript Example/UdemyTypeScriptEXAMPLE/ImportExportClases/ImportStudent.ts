

//Import Clases
import { StudentActivity } from "../ImportExportClases/Export"

//import-> ClassNamme
//From-> Folder or FileName Name

class StudentMarks {

    private _StudentName: string;
    private _Studentmarks: number;

    //In java Script Protected == Public 
    protected _test: string;


    public set StudentName(val: string) {


        this._StudentName = val;
    }

    public get StudentName(): string {

        return this._StudentName;

    }


    public set StudentStudentmarks(val: number) {

        this.StudentStudentmarks = val;
    }

    public get StudentStudentmarks(): number {

        return this.StudentStudentmarks;

    }



}