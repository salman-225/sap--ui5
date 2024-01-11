sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
    
], function(Controller,MessageToast){
    'use strict';
    return Controller.extend("app.First",{
        go_to_next_Screen :function(){// button functionality is in controller
            MessageToast.show("we are in second page")
            this.byId("app").to(this.byId("target"));// to particular id of app to particular page id
        //    var img= this.getview.byId("app").to(this.byId("image"))
        //    img.setVisible("true")
        },
         go_back :function(){
            MessageToast.show("we are in first page")
            this.byId("app").to(this.byId("first"));
        }
    })

})
//controller is for business logic or to manipulate data