"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class ObserverFile {
    constructor(documentTitle) {
    }
    setDocumentTitle(documentTitle) {
        this.documentTitle = documentTitle;
    }
    getDocumentTitle() {
        return this.documentTitle;
    }
    setText(text) {
        this.text = text;
    }
    getText() {
        return this.text;
    }
    setSetting(settingParam) {
        var setting = vscode.Uri.parse("untitled:" + this.getDocumentTitle);
        vscode.workspace.openTextDocument(setting).then((document) => {
            vscode.window.showTextDocument(document, 1, false).then(e => {
                e.edit(edit => {
                    edit.insert(new vscode.Position(0, 0), this.getText());
                });
            });
        }, (error) => {
            console.error(error);
        });
    }
}
// var setting: vscode.Uri = vscode.Uri.parse("untitled:" + documentTitle);
// 	vscode.workspace.openTextDocument(setting).then((tableDoc: vscode.TextDocument) => {
// 		vscode.window.showTextDocument(tableDoc, 1, false).then(e => {
// 			e.edit(edit => {
// 				edit.insert(new vscode.Position(0, 0), tableText);
// 			});
// 		});
// 	}, (error: any) => {
// 		console.error(error);
// 		debugger;
// 	});	
//# sourceMappingURL=observer-class.js.map