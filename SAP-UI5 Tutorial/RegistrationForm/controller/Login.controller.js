sap.ui.define([
    './BaseController.controller',
    'sap/ui/model/json/JSONModel'
  ], function (Controller,JSONModel) {
    "use strict";
  
    return Controller.extend("app.controller.Login", {
      onInit: function () {
        // var oModel = new sap.ui.model.json.JSONModel("./data/data.json");
        // oModel.loadData();
        // this.getView().setModel(oModel, "credentialsModel");
        var userModel = new JSONModel("./data/data.json");//accessing file
        this.getView().setModel(userModel, "users");

        // this.hardcodedUsername = "admin";
        // this.hardcodedPassword = "password123";
        
      },
  
      onLogin: function () {
        var enteredUsername = this.byId("usernameInput").getValue();
        var enteredPassword = this.byId("passwordInput").getValue();
        
        var usersData = this.getView().getModel("users").getData();
        // console.log(usersData)
        // console.log(usersData.user[0]["username"])
        for ( var i=0; i<usersData.user.length;i++){
          var user= usersData.user[i];
        
          if (user.username === enteredUsername && user.password === enteredPassword) {
            console.log(user.username)
            var oRouter=this.getRouter();
               oRouter.navTo("form");
               break;
           } else {
             alert("Please Enter the correct username or password")
           }
       
        }
        

        // var isValidUser = usersData.some(function (user) {
          // return user.username === enteredUsername && user.password === enteredPassword;

        
        // });

        

      
       // enteredUsername === this.hardcodedUsername && enteredPassword === this.hardcodedPassword

      }
    });
  });