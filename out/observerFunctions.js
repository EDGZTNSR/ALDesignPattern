"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observer = require("./class/observer-class");
function CreateObserverTable() {
    let observerTable = new observer.ObserverFile();
    observerTable.setDocumentTitle("TAB50000.Observer.al");
    let tableText = `
	Table`;
    observerTable.setText(tableText);
    observerTable.openAndEditDocument();
}
exports.CreateObserverTable = CreateObserverTable;
function CreateObserverCodeunit() {
    let codeunitText = `
	Codeunit `;
    let observerCodeunit = new observer.ObserverFile();
    observerCodeunit.setText(codeunitText);
    observerCodeunit.setDocumentTitle("COD50000.ObserverMgt.al");
    observerCodeunit.openAndEditDocument();
}
exports.CreateObserverCodeunit = CreateObserverCodeunit;
//# sourceMappingURL=observerFunctions.js.map