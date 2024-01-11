sap.ui.define([
    "sap/ui/core/mvc/XMLView"
    
], function(XMLView)// loading view
{
    'use strict';
  XMLView.create({viewName:"app.First"}).then(function(oview)//instance of view is oview is added in html id
  {
    oview.placeAt("content");
  })
   
});