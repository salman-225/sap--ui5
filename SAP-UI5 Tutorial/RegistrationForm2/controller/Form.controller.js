sap.ui.define([
    './BaseController.controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/Sorter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(Controller, MessageToast,JSONModel,Sorter,Filter,FilterOperator) {
    'use strict';
    return Controller.extend("app.controller.Form",{
       
 
       onInit : function () {

        var oModeld = new JSONModel({
            countries: [
                { key: "US", name: "United States" },
                { key: "CA", name: "Canada" },
            ],
            selectedCountryAddress: "",  
            state: [
                { key: "Ts", name: "Telangana" },
                { key: "AP", name: "Andhra pradesh" },
            ],
            stateComboBoxAddress: "",  
          

             
        });
     
  this.getView().setModel(oModeld);

  this.tabledata = new sap.ui.model.json.JSONModel({
    modelData: []
});
this.getView().setModel(this.tabledata, "table");
  

  
    },

  save:  function(tabledata) {
        var firstname = this.byId("firstnameInput").getValue();
        var lastname = this.byId("lastnameInput").getValue();
        var fathername = this.byId("fatherInput").getValue();
        var dateofbirth = this.byId("dobInput").getValue();
        var age= this.byId("ageInput").getValue();


        
    console.log(dateofbirth+"*********")
    console.log(lastname.length)


    
if (!firstname ) {
    // firstname.set
    this.byId("firstnameInput").setValueState("Error");
    this.byId("firstnameInput").setValueStateText("First name is required and must be at least 6 characters long.");
    return; // Prevent form submission
  }
  if (!lastname|| lastname.length < 6) {
    // firstname.set
        this.byId("lastnameInput").setValueState("Error");
    this.byId("lastnameInput").setValueStateText("Last name is required and must be at least 6 characters long.");
    return; // Prevent form submission
  }
  if (!fathername || fathername.length < 6) {
   
        this.byId("fatherInput").setValueState("Error");
    this.byId("fatherInput").setValueStateText("Father name is required and must be at least 6 characters long.");
    return; // Prevent form submission
  }
  if (!age ) {
   
    this.byId("ageInput").setValueState("Error");
this.byId("ageInput").setValueStateText("Please provide the age.");
return; // Prevent form submission
}



        var oData = {
            Firstname: firstname,
            Lastname : lastname,
            Fathername: fathername,
            Dateofbirth: dateofbirth,
            Age:age
        };
        console.log(oData.Dateofbirth)
    
        // Add data to the model
       this. tabledata.getProperty("/modelData").push(oData);
    //    console.log(tabledata.modelData[0])
        // Clear input fields
        this.byId("firstnameInput").setValue("");
        this.byId("lastnameInput").setValue("");
        this.byId("fatherInput").setValue("");
        this.byId("dobInput").setValue("");
        this.byId("ageInput").setValue("");
        this.byId("midlenameInput").setValue("");

        this.byId("first").to(this.byId("table")).setModel("table");
    },
  
    //     // MessageToast.show("Submitted: \nfathername: " + sFirstName);
    //     console.log("/firstName")
    // },
    // onVerify: function(){
    //     MessageToast.show("we are in second page")
    //     this.byId("first").to(this.byId("table"));// to particular id of app to particular page id
  
    
    // },
    
 
    createEmployee: function(){
        MessageToast.show("we are in create page")
        this.byId("first").to(this.byId("form"))
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
     searchEmployee:function(olr){
        var sQuery=olr.getParameter("query"),//geting parameter value and storing in squery var
        aFilter=[new Filter("Firstname",FilterOperator.Contains,sQuery),new Filter("Lastname",FilterOperator.Contains,sQuery)],//using filter and filteropereator liab and checking squery is present or not.
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
         onFilterSelect: function (oEvent) {
            var oBinding = this.byId("employeeTable").getBinding("items"),
                sKey = oEvent.getParameter("key"),
                aFilters = [];
    
            // ... other filter logic ...
          
            if (sKey === "Age") {
              // No age-based filtering
              aFilters = [];
            } else if (sKey === "Under18") {
              aFilters.push(new Filter("Age", FilterOperator.LT, 18));
            } else if (sKey === "Over40")  {
                // this.tabledata.filter(function(items) {
                //   return items.Age > 40;
                // });
                // this.byId("employeeTable").getBinding("items").refresh();
                aFilters.push(new Filter("Age", FilterOperator.GT, 40));
              }
          
            oBinding.filter(aFilters);
          }
       

    });
});
