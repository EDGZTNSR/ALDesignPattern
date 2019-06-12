import * as vscode from 'vscode';
import * as observer from './observerFunctions';
export function activate(context: vscode.ExtensionContext) {

	let observerCommand = vscode.commands.registerCommand('extension.createObserver', async () => {
		observer.CreateObserverTable();
		observer.CreateObserverCodeunit();
	});
	
	context.subscriptions.push(observerCommand);
}

export function deactivate() {}

