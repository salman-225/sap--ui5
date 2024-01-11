sap.ui.define([
    './BaseController.controller',
    'sap/ui/model/json/JSONModel'
  ], function (Controller,JSONModel) {
    "use strict";
  
    return Controller.extend("app.controller.Login", {
      onInit: function () {
      
        var userModel = new JSONModel("./data/data.json");//accessing file
        this.getView().setModel(userModel, "users");

        // this.hardcodedUsername = "admin";
        // this.hardcodedPassword = "password123";
        
      },
  
      onLogin: function () {
        var enteredUsername = this.byId("usernameInput").getValue();
        var enteredPassword = this.byId("passwordInput").getValue();
        
        var usersData = this.getView().getModel("users").getData();
       
        for ( var i=0; i<usersData.user.length;i++){
          var user= usersData.user[i];
        
          if (user.username === enteredUsername && user.password === enteredPassword) {
            console.log(user.username)
            var oRouter=this.getRouter();
               oRouter.navTo("form");
               break;
           } 
           else
            {
              console.log(user.username)
             alert("Please Enter the correct username or password")
         
           }
       
        }
        
        

        
      }
    });
  });