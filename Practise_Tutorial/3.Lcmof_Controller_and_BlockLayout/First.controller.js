sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel'
], function(Controller, MessageToast,JSONModel) {
    'use strict';
    return Controller.extend("app.First",{
        onExit : function () {
            alert(" we are in on Exit");
        },
 
        onAfterRendering : function () {
           alert("We are in on after rendering");
        },
 
        onBeforeRendering : function () {
           alert("We are in on before rendering");
        },
 
        go_to_next_screen : function(){
            MessageToast.show("We are in second screen");
            this.byId("app").to(this.byId("target"));
        },
 
        onInit : function () {
           alert("we are in on init"); // bindig of json model
            this.getView().setModel(new JSONModel({
                    names : [
                        "Salman",
                        "Prathiba",
                        "Bharath",
                        "Rohan",
                        "Kavya",
                        "Responsive Across Browsers and Devices"
                    ]
                })
            );
        },
 
        onChange: function (oEvent) {
            var bState = oEvent.getParameter("state");// to check on or off
            this.byId("ready").setVisible(bState);// adding visible condition
        }
    });
});