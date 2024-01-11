sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode',
    'sap/ui/model/resource/ResourceModel'
], function(Controller, MessageToast,JSONModel,BindingMode,ResourceModel) {
    'use strict';
    return Controller.extend("app.controller.Second",{
       
 
        showText: function(){
          var mdata=  this.getView().getModel().getProperty("/message");// in view getting the model with property
            MessageToast.show(mdata);
        }
    });
});