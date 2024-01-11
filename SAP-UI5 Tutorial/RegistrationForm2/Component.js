sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode',
    'sap/ui/model/resource/ResourceModel'
], function(UIComponent,JSONModel,BindingMode,ResourceModel) {
    'use strict';
    return UIComponent.extend("app.Component",{
        metadata :
        {
            "interfaces":["sap.ui.core.IAsynContentCreation"],
            "manifest":"json"//removed rootview and added in manifesto
            
        },
     
  

       
        
      
        init : function(){
            UIComponent.prototype.init.apply(this,arguments);
             // create the views based on the url/hash
   this.getRouter().initialize();

            var i18n= new  ResourceModel({//in resourcemodel adding one file and assinging to variable
                bundleName :"app.i18n.i18n"
            })
            this.setModel(i18n,"i18n")
            var oBundle = i18n.getResourceBundle();
// it is using in first view and second view


            var jModel= new JSONModel({message:oBundle.getText("message")})
           jModel.setDefaultBindingMode(BindingMode.OneWay)
            this.setModel(jModel);



              var experience = new JSONModel({
                years:[
                    { ProductId: "1", Name: "zero" },
                    { ProductId: "2", Name: "more than one" },
                    { ProductId: "3", Name: "lmore than two" },
                    { ProductId: "4", Name: "more than three" },
                    { ProductId: "5", Name: "more than four" },
                    // Add more items as needed
                  ],
           
              });
              this.setModel(experience, "dropdownModel");
            
        }
        
    });
});
