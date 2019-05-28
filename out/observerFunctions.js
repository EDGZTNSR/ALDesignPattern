"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function CreateObserverTable() {
    let tableText = `table 50000 Observer
{
	DataClassification = ToBeClassified;

	fields
	{
		field(1; "Table ID"; Integer)
		{
			TableRelation = AllObj."Object ID" where ("Object Type" = const (Table));
			DataClassification = SystemMetadata;
		}
		field(5; TrackInsert; Boolean)
		{
			DataClassification = SystemMetadata;
		}
		field(10; TrackModify; Boolean)
		{
			DataClassification = SystemMetadata;
		}
		field(15; TrackDelete; Boolean)
		{
			DataClassification = SystemMetadata;
		}
		field(20; TrackRename; Boolean)
		{
			DataClassification = SystemMetadata;
		}
	}

	keys
	{
		key(PrimaryKey; "Table ID")
		{
			Clustered = true;
		}
	}

}`;
    let documentTitle = "TAB50000.Observer.al";
    var setting = vscode.Uri.parse("untitled:" + documentTitle);
    vscode.workspace.openTextDocument(setting).then((tableDoc) => {
        vscode.window.showTextDocument(tableDoc, 1, false).then(e => {
            e.edit(edit => {
                edit.insert(new vscode.Position(0, 0), tableText);
            });
        });
    }, (error) => {
        console.error(error);
        debugger;
    });
}
exports.CreateObserverTable = CreateObserverTable;
function CreateObserverCodeunit() {
    let CodeunitText = `codeunit 50000 ObserverMgt
{

	[EventSubscriber(ObjectType::Codeunit, Codeunit::"Global Triggers", 'GetDatabaseTableTriggerSetup', '', true, true)]
	local procedure "GetDatabaseTableTriggerSetup"(
		TableId: Integer;
		var OnDatabaseInsert: Boolean;
		var OnDatabaseModify: Boolean;
		var OnDatabaseDelete: Boolean;
		var OnDatabaseRename: Boolean;
	)
	begin
		if Observable_g.Get(TableId) then begin
			if Observable_g.TrackInsert then
				OnDatabaseInsert := true;
			if Observable_g.TrackModify then
				OnDatabaseModify := true;
			if Observable_g.TrackDelete then
				OnDatabaseDelete := true;
			if Observable_g.TrackRename then
				OnDatabaseRename := true;
		end;
	end;


	[EventSubscriber(ObjectType::Codeunit, Codeunit::"Global Triggers", 'OnDatabaseInsert', '', true, true)]
	local procedure OnDatabaseInsert(RecRef: RecordRef)
	begin
		if Observable_g.Get(RecRef.Number()) and Observable_g.TrackInsert then
			Message('Track Insert');
		//Do Something
	end;


	[EventSubscriber(ObjectType::Codeunit, Codeunit::"Global Triggers", 'OnDatabaseModify', '', true, true)]
	local procedure "OnDatabaseModify"(RecRef: RecordRef)
	begin
		if Observable_g.Get(RecRef.Number()) and Observable_g.TrackModify then
			Message('Track Modify');
		// DoSomething
	end;



	[EventSubscriber(ObjectType::Codeunit, Codeunit::"Global Triggers", 'OnDatabaseDelete', '', true, true)]
	local procedure "OnDatabaseDelete"(RecRef: RecordRef)
	begin
		if Observable_g.Get(RecRef.Number()) and Observable_g.TrackDelete then
			Message('Track Delete');
		// DoSomething
	end;


	[EventSubscriber(ObjectType::Codeunit, Codeunit::"Global Triggers", 'OnDatabaseRename', '', true, true)]
	local procedure "OnDatabaseRename"(RecRef: RecordRef; xRecRef: RecordRef)
	begin
		if Observable_g.Get(RecRef.Number()) and Observable_g.TrackRename then
			Message('Track Rename');
		// DoSomething
	end;

	var
		Observable_g: Record DPO_Observer;

} `;
    let documentTitle = "COD50000.ObserverMgt.al";
    var setting = vscode.Uri.parse("untitled:" + documentTitle);
    vscode.workspace.openTextDocument(setting).then((codeunitDoc) => {
        vscode.window.showTextDocument(codeunitDoc, 1, false).then(e => {
            e.edit(edit => {
                edit.insert(new vscode.Position(0, 0), CodeunitText);
            });
        });
    }, (error) => {
        console.error(error);
        debugger;
    });
}
exports.CreateObserverCodeunit = CreateObserverCodeunit;
//# sourceMappingURL=observerFunctions.js.map