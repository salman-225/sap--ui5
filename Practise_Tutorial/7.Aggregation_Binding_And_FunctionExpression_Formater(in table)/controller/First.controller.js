sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode',
    'sap/ui/model/resource/ResourceModel'
], function(Controller, MessageToast,JSONModel,BindingMode,ResourceModel) {
    'use strict';
    return Controller.extend("app.controller.First",{
       
 
//         onInit : function () {

//         //     var i18n= new  ResourceModel({//in resourcemodel adding one file and assinging to variable
//         //         bundleName :"app.i18n.i18n"
//         //     })
//         //     this.getView().setModel(i18n,"i18n")
//         //     var oBundle = i18n.getResourceBundle();



//         //     var jModel= new JSONModel({message:oBundle.getText("message")})
//         //    jModel.setDefaultBindingMode(BindingMode.OneWay)
//         //     this.getView().setModel(jModel);
//            // alert("we are in on init"); // bindig of json model
           
// //above code brief
//            // this.getView().setModel(new JSONModel({//in view  seting the model
//             //    message:"This is ui5 Training"
//             //     })
//             // );
//         },
 
       
        // showText: function(){
        //   var mdata=  this.getView().getModel().getProperty("/message");// in view getting the model with property
        //     MessageToast.show(mdata);
        // }
    });
});