sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/resource/ResourceModel',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode'
  ], function (UIComponent, ResourceModel,JSONModel,BindingMode) {
    'use strict';
  
    return UIComponent.extend("app.Component", {
      metadata: {
        "interfaces": ["sap.ui.core.IAsyncContentCreation"],
        "manifest" : "json"
      },
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);
        this.getRouter().initialize();

        // var i18n = this.getModel("i18n"), 
        // oBundle = i18n.getResourceBundle();
        // mData = new JSONModel({ 
        //   data : [{
        //     fname:"Rohan",
        //     lname : "A",
        //     age :20,
        //     projects : 60
        //   },{
        //     fname:"Prathibha",
        //     lname : "B",
        //     age : 20,
        //     projects : 30
        //   },{
        //     fname:"Kavya",
        //     lname : "C",
        //     age : 20,
        //     projects : 10
        //   }]
        //   });

        // var i18n = new ResourceModel({
        //   bundleName: 'app.i18n.i18n'
        // });
        // this.setModel(i18n, "i18n");

        // var oBundle = i18n.getResourceBundle(),
        //   mData = new JSONModel({
        //     message: oBundle.getText("message")
        //   });

        
          
        // mData.setDefaultBindingMode(BindingMode.OneWay);
        // this.setModel(mData);
      }
    });
  });