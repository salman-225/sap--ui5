sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
	"sap/ui/model/BindingMode",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/core/Fragment"
], function(Controller,MessageToast, JSONModel,Fragment) {
    'use strict';
    return Controller.extend("app.controller.Second",{
		onInit : function () {

			// var i18n = new ResourceModel({
			// 	bundleName : 'app.i18n.i18n'
			// });
			// this.getView().setModel(i18n,"i18n");
			// var oBundle = i18n.getResourceBundle();
			
            // var mData = new JSONModel({
			// 				message : { one : oBundle.getText("message") } 
			// });
			// mData.setDefaultBindingMode(BindingMode.OneWay);
			// this.getView().setModel(mData);
		},
		onPress : function(){
			var message = this.getView().getModel().getProperty("/message");
			MessageToast.show(message);
			
		} 	,
		openDialog: function () {
			if (!this.oDialog1) {
			  this.oDialog1 = this.loadFragment({
				name: "app.Fragment.Dialog"
			  });
			}
			this.oDialog1.then(function (oDialog1) {
			  oDialog1.open();
			});
		  },
		  closeDialog : function(){
			this.oDialog1.then(function (oDialog1) {
			  oDialog1.close();
			});
		  }
    });
});