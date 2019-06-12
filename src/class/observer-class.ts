import * as vscode from 'vscode';
import { CreateObserverTable } from '../observerFunctions';
import { write } from 'fs';

export class ObserverFile {
    documentTitle!: string;
    text!: string;

    constructor(){
        this.documentTitle = '';
        this.text = '';
    }

    setDocumentTitle(docTitle: string){
        this.documentTitle = docTitle; 
    }
    getDocumentTitle(): string{
        return this.documentTitle;
    }
    setText(text: string){
        this.text = text;
    }
    getText(): string{
        return this.text;
    }
    
    async openAndEditDocument(){

        var setting: vscode.Uri = vscode.Uri.parse("untitled:" + this.getDocumentTitle());
        vscode.window.showTextDocument(setting);
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No Editor open ');
        }
        if (editor) {
            editor.edit(editbuilder => {
                editbuilder.insert(new vscode.Position(0,0), this.getText());
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
        vscode.workspace.openTextDocument(setting).then((tableDoc: vscode.TextDocument) => {
            vscode.window.showTextDocument(tableDoc, 1, false).then(e => {
                e.edit(edit => {
                    edit.insert(new vscode.Position(0, 0), this.getText());
                });
            });
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