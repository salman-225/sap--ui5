sap.ui.define([
  "sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
  'use strict';
  new ComponentContainer({
    name : "app",
    settings :{
      id : "demo"
    },
    async :true
  }).placeAt("content")
  
});
  // XMLView.create({viewName:"app.First"}).then(function(oview)
  // {
  //   oview.placeAt("content");
  // })
   
