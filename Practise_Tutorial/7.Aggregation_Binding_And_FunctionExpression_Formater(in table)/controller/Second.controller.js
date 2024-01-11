sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode',
    'sap/ui/model/resource/ResourceModel'
], function(Controller, MessageToast,JSONModel,BindingMode,ResourceModel) {
    'use strict';
    return Controller.extend("app.controller.Second",{
       
        formatName: function(fname,lname){
            var fullname =fname +" " +lname
                return fullname;
        },
        showText: function(){
          var mdata=  this.getView().getModel().getProperty("/message");// in view getting the model with property
            MessageToast.show(mdata);
        },


        
        onOpenDialog() {
            // create dialog lazily
            this.pDialog ??= this.loadFragment({
                name: "app.fragment.Dialog"
            });
        
            this.pDialog.then((oDialog) => oDialog.open());
        },

        
        OpenDialog: function(){
            if(!this.odia1){
                this.odia1= this.loadFragment({
                    name:"app.fragment.Dialog"
                });
            }
            // this.odia1??=this.loadFragment({
            //     name: "app.fragment.dialog"
            // });
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