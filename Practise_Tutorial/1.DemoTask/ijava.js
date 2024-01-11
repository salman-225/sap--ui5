sap.ui.define([
    'sap/m/Button',//loading of liabries which in use
    'sap/m/MessageToast'

], function(Button, MessageToast)
{
    'use strict'; // in javascript it will check standards
    new Button({   // creating instance of the button
        text:"Say Hello",       //properties of button
        press : function(){         //event in button
            MessageToast.show(" Hello World")
        }
    }).placeAt("content");
   
});