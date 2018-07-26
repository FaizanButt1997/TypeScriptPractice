//Import Interface
import shape = require("../../ImportExportClases/InterfaceShapes/ExportInterface")


export class Circle implements shape.Ishape {

    public draw(): void {

        console.log("Circle is drawn external modules");
    }

}