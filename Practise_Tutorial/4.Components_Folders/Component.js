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
            "rootView": {
                "viewName": "app.view.First",
                "type": "XML",
                "id": "app"
            }
            
        },
      
        init : function(){
            UIComponent.prototype.init.apply(this,arguments);

            var i18n= new  ResourceModel({//in resourcemodel adding one file and assinging to variable
                bundleName :"app.i18n.i18n"
            })
            this.setModel(i18n,"i18n")
            var oBundle = i18n.getResourceBundle();



            var jModel= new JSONModel({message:oBundle.getText("message")})
        //    jModel.setDefaultBindingMode(BindingMode.OneWay)
            this.setModel(jModel);

        }
        
    });
});
