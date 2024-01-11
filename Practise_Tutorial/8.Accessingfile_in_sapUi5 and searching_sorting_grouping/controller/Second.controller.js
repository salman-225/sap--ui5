sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode',
    'sap/ui/model/resource/ResourceModel',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'sap/ui/model/Sorter'
], function(Controller, MessageToast,JSONModel,BindingMode,ResourceModel,Filter,FilterOperator,Sorter) {
    'use strict';
    return Controller.extend("app.controller.Second",{

       
        formatName: function(fname,lname){
            var fullname =fname +" " +lname
                return fullname;
        },
        openSetting:function(){
            if(!this.employeeSettings) {
              this.employeeSettings=this.loadFragment({
                  name:"app.fragment.EmployeeSetting"
              });
            }
            this.employeeSettings.then(function(oDialog){
           oDialog.open();
   
            })
          },
          applySettings:function(oEvt){
            var sortItem=oEvt.getParameter("sortItem"),
             groupItem=oEvt.getParameter("groupItem"),
             sortDes=oEvt.getParameter("sortDescending"),
             groupDes=oEvt.getParameter("groupDescending"),
             oTable=this.byId("employeeTable"),
            oBinding=oTable.getBinding("items"),
            oSorter=null;
            if(sortItem){
                oSorter=new Sorter(sortItem.getKey(),sortDes);
            }
            if(groupItem){
                oSorter=new Sorter(groupItem.getKey(),groupDes,true);
         }
         oBinding.sort(oSorter)
         },
         
        showText: function(){
        //  var mdata=  this.getView().getModel().getProperty("/message");// in view getting the model with property
            MessageToast.show("ding dong");
        },
   


        
        onOpenDialog() {
            // create dialog lazily
            this.pDialog ??= this.loadFragment({
                name: "app.fragment.Dialog"
            });
        
            this.pDialog.then((oDialog) => oDialog.open());
        },

        
        OpenDialog: function(){
            if(!this.odia1){
                this.odia1= this.loadFragment({
                    name:"app.fragment.Dialog"
                });
            }
            // this.odia1??=this.loadFragment({
            //     name: "app.fragment.dialog"
            // });
            this.odia1.then(function(odia1){
                odia1.open();
            });

        },
        closedialog :function(){
            this.odia1.then(function(odia1){
                odia1.close();
            });

        },
//search employye code
    
        searchEmployee:function(olr){
            var sQuery=olr.getParameter("query"),//geting parameter value and storing in squery var
            aFilter=[new Filter("fname",FilterOperator.Contains,sQuery),new Filter("lname",FilterOperator.Contains,sQuery)],//using filter and filteropereator liab and checking squery is present or not.
            oTable=this.getView().byId("employeeTable"),//geting instance of table
            oBinding=oTable.getBinding("items"),//getting dinding of items from table.
            oFilter=null;
            if(sQuery.length!=0){
                oFilter=new Filter({
                    filters:aFilter,
                    and:false  //it false apply or for both above fields
                })
     
            }
            oBinding.filter(oFilter);
     
               
             },
            //  openSetting :function(){
            //     if(!this.employeesetting){//checking this instance is free or not
            //         this.employeesetting= this.loadFragment({// if it is free it has to load
            //             name:"app.fragment.EmployeeSetting"
            //         });
            //     }
            //     // this.odia1??=this.loadFragment({
            //     //     name: "app.fragment.dialog"
            //     // });
            //     this.employeesetting.then(function(employeesetting){
            //         employeesetting.open();
            //     });
            // }
            // openSettings:function(){
            //     if(!this.employeeSettings) {
            //       this.employeeSettings=this.loadFragment({
            //           name:"app.Fragments.EmployeeSettings"
            //       });
            //     }
            //     this.employeeSettings.then(function(oDialog){
            //    oDialog.open();
       
            //     })
            //   },
    });
});