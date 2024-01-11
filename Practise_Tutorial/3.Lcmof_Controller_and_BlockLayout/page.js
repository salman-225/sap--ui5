sap.ui.define([
    "sap/ui/core/mvc/XMLView"
    
], function(XMLView)
{
    'use strict';
  XMLView.create({viewName:"app.First"}).then(function(oview)
  {
    oview.placeAt("content");
  })
   
});