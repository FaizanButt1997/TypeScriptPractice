import shape = require("../../ImportExportClases/InterfaceShapes/ExportInterface")
import circle = require("../../ImportExportClases/InterfaceShapes/ImportInterface")

function DrawAllShapes(ShapeDraw: shape.Ishape) {

    ShapeDraw.draw();
}

DrawAllShapes(new circle.Circle());