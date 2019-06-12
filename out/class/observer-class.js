"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class ObserverFile {
    constructor() {
        this.documentTitle = '';
        this.text = '';
    }
    setDocumentTitle(docTitle) {
        this.documentTitle = docTitle;
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
    openAndEditDocument() {
        return __awaiter(this, void 0, void 0, function* () {
            var setting = vscode.Uri.parse("untitled:" + this.getDocumentTitle());
            vscode.window.showTextDocument(setting);
            var editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showErrorMessage('No Editor open ');
            }
            if (editor) {
                editor.edit(editbuilder => {
                    editbuilder.insert(new vscode.Position(0, 0), this.getText());
                });
            }
            // let doc = vscode.workspace.openTextDocument(setting);
            // // let temp = vscode.window.showTextDocument(setting);
            // vscode.window.showTextDocument(doc,1,true);
            // let visible = vscode.window.visibleTextEditors;
            // let editor = vscode.window.activeTextEditor;
            // if (editor) {
            //     editor.edit(editbuilder => {
            //         editbuilder.insert(new vscode.Position(0,0), this.getText());
            //     });
            // }
            vscode.workspace.openTextDocument(setting).then((tableDoc) => {
                vscode.window.showTextDocument(tableDoc, 1, false).then(e => {
                    e.edit(edit => {
                        edit.insert(new vscode.Position(0, 0), this.getText());
                    });
                });
            });
        });
    }
}
exports.ObserverFile = ObserverFile;
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