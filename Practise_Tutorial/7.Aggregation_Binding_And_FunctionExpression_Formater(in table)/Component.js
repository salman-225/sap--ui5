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

            var i18n= new  ResourceModel({//in resourcemodel adding one file and assinging to variable
                bundleName :"app.i18n.i18n"
            })
            this.setModel(i18n,"i18n")
            var oBundle = i18n.getResourceBundle();
// it is using in first view and second view


            var jModel= new JSONModel({

                data: [{
                    fname:"suman",
                    lname:"varma",
                    age:22,
                    project:2
                },
                {
                    fname:"anand",
                    lname:"prathab",
                    age:45,
                    project:2
                },
                {
                    fname:"bhanu",
                    lname:"varma",
                    age:30,
                    project:2
                },
            ]
            })
           jModel.setDefaultBindingMode(BindingMode.OneWay)
            this.setModel(jModel);

        }
        
    });
});
