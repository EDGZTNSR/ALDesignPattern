"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const observer = require("./observerFunctions");
function activate(context) {
    let observerCommand = vscode.commands.registerCommand('extension.createObserver', () => {
        observer.CreateObserverTable();
        observer.CreateObserverCodeunit();
    });
    context.subscriptions.push(observerCommand);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map