import * as vscode from 'vscode';
import { CreateObserverTable } from '../observerFunctions';

class ObserverFile {
    documentTitle!: string;
    setting!: string;
    text!: string;

    constructor(documentTitle: string){

    }

    setDocumentTitle(documentTitle: string){
        this.documentTitle = documentTitle;
    }
    getDocumentTitle(){
        return this.documentTitle;
    }
    setText(text: string){
        this.text = text;
    }
    getText(){
        return this.text;
    }
    
    setSetting(settingParam: string){
        var setting: vscode.Uri = vscode.Uri.parse("untitled:" + this.getDocumentTitle);
            vscode.workspace.openTextDocument(setting).then((document: vscode.TextDocument) => {
                vscode.window.showTextDocument(document, 1, false).then(e => {
                    e.edit(edit => {
                        edit.insert(new vscode.Position(0,0), this.getText());
                    });
                });
            }, (error: any) => {
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