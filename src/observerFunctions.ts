import * as vscode from 'vscode';
import * as observer from './class/observer-class';

export function CreateObserverTable(){
	let observerTable = new observer.ObserverFile();
	observerTable.setDocumentTitle("TAB50000.Observer.al");

	let tableText = `
	Table`;

	observerTable.setText(tableText);
	observerTable.openAndEditDocument();
}

export function CreateObserverCodeunit(){
	let codeunitText = `
	Codeunit `;
	
	let observerCodeunit = new observer.ObserverFile();
		
	observerCodeunit.setText(codeunitText);
	observerCodeunit.setDocumentTitle("COD50000.ObserverMgt.al");
	observerCodeunit.openAndEditDocument();
}