sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function(Controller,History, UIComponent){
    'use strict';
    return Controller.extend("app.controller.BaseController",{
        getModel :function(sModelName){
            return this.getOwnerComponent().getModel(sModelName);
        },
        setModel :function(oModel, sModelName){
            this.getOwnerComponent().setModel(oModel,sModelName);
        },
        getResourceBundle : function()  {
        return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },
        getRouter :function(){
        return this.getOwnerComponent().getRouter();
        },
        //button at not found page
        // onNavBack: function () {
		// 	var oHistory, sPreviousHash;

		// 	oHistory = History.getInstance();
		// 	sPreviousHash = oHistory.getPreviousHash();

		// 	if (sPreviousHash !== undefined) {
		// 		window.history.go(-1);
		// 	} else {
		// 		this.getRouter().navTo("initial", {}, true /*no history*/);
		// 	}
		// }
    });
 })