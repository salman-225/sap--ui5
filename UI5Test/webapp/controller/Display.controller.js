sap.ui.define([
    './BaseController.controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
  'sap/ui/model/BindingMode',
  'sap/ui/model/resource/ResourceModel'
], function(Controller, MessageToast,JSONModel,BindingMode,ResourceModel) {
    'use strict';
    return Controller.extend("app.Display",{

      onInit: function () {
        this.getRouter().getRoute("display").attachPatternMatched(this._objectRouteMatched.bind(this));
      },
      _objectRouteMatched: function (oEvt) {
        var oParams = oEvt.getParameter("arguments"),
            sEmployeeId = oParams.employeeid;
            this.bindView(sEmployeeId);
      },
      bindView : function(sEmployeeId){
        var oModel= this.getModel();
        oModel.metadataLoaded().then(function(){
          var sContextPath = "/"+oModel.createKey("Employee",{
            ID : sEmployeeId
          });
          this.getView().bindElement(sContextPath);
        }.bind(this));
      },
      onSave : function(){
        var oModel= this.getModel();
        if(oModel.hasPendingChanges()){
          oModel.submitChanges();
          window.history.go(-1);
        }
      },
      onDelete : function(){
        var oModel= this.getModel(),
            sPath = this.getView().getBindingContext().getPath();
            oModel.remove(sPath,{
              success : function(){
                window.history.go(-1);
              }
            })
      }




        // onInit: function () {
        //     this.getRouter().getRoute("display").attachPatternMatched(this._objectRouteMatched.bind(this));
        //   },
        //   _objectRouteMatched: function (oEvt) {
        //     var oParams = oEvt.getParameter("arguments"),
        //         sIndex = oParams.index;
        //         this.bindView(sIndex);
        //   },
        //   bindView : function(sIndex){
        //     var oModel= this.getModel("employee");
        //          this.getView().setModel(oModel) ;
        //          this.getView().bindElement("/data/" + sIndex );  


            
        //     // oModel.metadataLoaded().then(function(){
        //     //   var sContextPath = "/"+oModel.createKey("Employees",{
        //     //     EmployeeID : sEmployeeId
        //     //   });
        //     //   this.getView().bindElement(sContextPath);
        //     // }.bind(this));
        //   }

    });
});