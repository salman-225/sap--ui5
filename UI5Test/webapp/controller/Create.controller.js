sap.ui.define([
    './BaseController.controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
	'sap/ui/model/BindingMode',
	'sap/ui/model/resource/ResourceModel',
	'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator',
	'sap/ui/model/Sorter'
], function(Controller, MessageToast,JSONModel,BindingMode,ResourceModel,Filter,FilterOperator,Sorter) {
    'use strict';
    return Controller.extend("app.Create",{


        onInit : function(){
            this.bindView();
        },
        bindView : function(sEmployeeId){
          var oModel= this.getModel();
          oModel.metadataLoaded().then(function(){
            var oContext = oModel.createEntry("Employee");
            this.getView().setBindingContext(oContext);
          }.bind(this));
        },
        onSave : function(){
          var oModel= this.getModel();
          if(oModel.hasPendingChanges()){
            oModel.submitChanges();
            window.history.go(-1);
          }
        }

		// formatName : function (fname,lname,psalary){
		// 	var fullname = fname + " " + lname + " " + psalary;
		// 	return fullname;
		// },
		// openSettings : function(){
        //     if(!this.employeeSettings){
        //       this.employeeSettings = this.loadFragment({
        //         name : "app.fragment.EmployeeSettings"
        //       });
        //     }
        //     this.employeeSettings.then(function(oDialog){
        //       oDialog.open();
        //     });
        //   },
		// searchEmployee: function (oEvt){
        //     var sQuery = oEvt.getParameter("query"),
        //     aFilter = [new Filter("fname",FilterOperator.Contains,sQuery),new Filter("lname",FilterOperator.Contains,sQuery)],
        //     oTable = this.getView().byId("employeeTable"),
        //     oBinding = oTable.getBinding("items"),
        //     oFilter = null;
        //     if(sQuery.length!=0){
        //       oFilter = new Filter({
        //         filters: aFilter,
        //         and : false
        //       });
        //     }      
        //     oBinding.filter(oFilter);
        //   },

		//   applySettings : function(oEvt){
        //     var sortItem = oEvt.getParameter("sortItem"),
        //         sortDesc = oEvt.getParameter("sortDescending"),
		// 		groupItem = oEvt.getParameter("groupItem"),
        //         groupDesc = oEvt.getParameter("groupDescending"),
        //         oTable = this.byId("employeeTable"),
        //         oBinding = oTable.getBinding("items"),
        //         oSorter = null;
        //     if(sortItem) {
        //       oSorter = new Sorter(sortItem.getKey(),sortDesc);
        //     }
    
        //     if(groupItem){
        //       oSorter = new Sorter(groupItem.getKey(),groupDesc,true);
        //     }
        //     oBinding.sort(oSorter);
        // }
		// onInit : function () {

		// 	// var i18n = new ResourceModel({
		// 	// 	bundleName : "app.i18n.i18n"
		// 	// });
		// 	// this.getView().setModel(i18n,"i18n");

		// 	// var oBundle = i18n.getResourceBundle();

		// 	// //alert("we are in on init");
		// 	// var jModel = new JSONModel({ message : oBundle.getText("message") });
		// 	// jModel.setDefaultBindingMode(BindingMode.OneWay);
		// 	// this.getView().setModel(jModel);
		// },

		// 	this.getView().setModel(new JSONModel({
		// 			message : "This is UI5 training"
		// 		})
		// 	);
		// },

		// show_text : function() {
		// 	var mData = this.getView().getModel().getProperty("/message");
		// 	MessageToast.show(mData);
		// }

		// onExit : function () {
		// 	//alert(" we are in on Exit");
		// },

		// onAfterRendering : function () {
		// 	//alert("We are in on after rendering");
		// },

		// onBeforeRendering : function () {
		// 	//alert("We are in on before rendering");
		// },

        // go_to_next_screen : function(){
        //     MessageToast.show("We are in second screen");
        //     this.byId("app").to(this.byId("target"));
        // },



		// onChange: function (oEvent) {
		// 	var bState = oEvent.getParameter("state");
		// 	this.byId("ready").setVisible(bState);
		// }
    });
});