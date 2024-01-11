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
        },

        OpenDialog: function(){
            if(!this.odia1){   // this is pointing to current controller and odial is instance of controller.
                this.odia1= this.loadFragment({
                    name:"app.fragment.Dialog"
                });
            }
           
            this.odia1.then(function(odia1){
                odia1.open();
            });

        },
        closedialog :function(){
            this.odia1.then(function(odia1){
                odia1.close();
            });

        }
    });
});