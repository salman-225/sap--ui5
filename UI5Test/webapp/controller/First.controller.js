sap.ui.define([
	'./BaseController.controller',
    // "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
	"sap/ui/model/BindingMode",
	'sap/ui/core/ValueState',
	'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
	'sap/ui/model/Sorter'
], function(Controller,MessageToast, JSONModel,BindingMode, ValueState, Filter, FilterOperator, Sorter) {
    'use strict';
    return Controller.extend("app.controller.First",{

		navigate : function(oEvt){
			var oSource = oEvt.getSource(),
          oContext = oSource.getBindingContext(),
          sEmployeeId = oContext.getProperty("ID");
          this.getRouter().navTo("display",{
            employeeid : sEmployeeId
          });
			// var oSource = oEvt.getSource(),
			// 	oContext = oSource.getBindingContext(),
			// 	sEmployeeId = oContext.getProperty("ID");
			// 	this.getRouter().navTo("display",{
			// 	  employeeid : sEmployeeId
			// 	});
		  },

		formatScoreState: function (iState) {
			if (iState > 60) {
			  return ValueState.Success;
			} else if (iState > 30) {
			  return ValueState.Warning;
			} else
			  return ValueState.Error;
		  },
		  formatName : function(sFname, sLname){
			// var i18nText = this.getOwnerComponent().getModel("i18n").getResourceBundle(),
			//   sReturnValue = i18nText.getText("combine_names",[sFname,sLname]);
			var sReturnValue = sFname + " "+ sLname;
			  return sReturnValue;
		  },
		  searchEmployee: function (oEvt){
			var sQuery = oEvt.getParameter("query"),
			aFilter = [new Filter("fname",FilterOperator.Contains,sQuery),new Filter("lname",FilterOperator.Contains,sQuery)],
			oTable = this.getView().byId("employeeTable"),
			oBinding = oTable.getBinding("items"),
			oFilter = null;
			if(sQuery.length!=0){
			  oFilter = new Filter({
				filters: aFilter,
				and : false
			  });
			}      
			oBinding.filter(oFilter);
		  },
		  openSettings : function(){
			if(!this.employeeSettings){
			  this.employeeSettings = this.loadFragment({
				name : "app.fragment.EmployeeSettings"
			  });
			}
			this.employeeSettings.then(function(oDialog){
			  oDialog.open();
			});
		  },
		  applySettings : function(oEvt){
			var sortItem = oEvt.getParameter("sortItem"),
				groupItem = oEvt.getParameter("groupItem"),
				sortDesc = oEvt.getParameter("sortDescending"),
				groupDesc = oEvt.getParameter("groupDescending"),
				oTable = this.byId("employeeTable"),
				oBinding = oTable.getBinding("items"),
				oSorter = null;
			if(sortItem) {
			  oSorter = new Sorter(sortItem.getKey(),sortDesc);
			}
	
			if(groupItem){
			  oSorter = new Sorter(groupItem.getKey(),groupDesc,true);
			}
			oBinding.sort(oSorter);
		},
		createEmployee : function(){
			var oRouter = this.getRouter();
			oRouter.navTo("create");
		  }
    });
});