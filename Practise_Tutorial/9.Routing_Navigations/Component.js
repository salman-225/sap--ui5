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
 

        }
        
    });
});
