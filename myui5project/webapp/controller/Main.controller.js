sap.ui.define(['sap/ui/core/mvc/Controller'],
//call back which will get called when all dependencies are loaded
    function (Vinod) {
        return Vinod.extend("mickey.controller.Main", {
            anotherFx: function(){
                alert("my xml view is live in action 😊");
            },
            callMe: function () {
                //alert('welcome');

                //we can use the object of the button
                //First get the ui5 application object
                var oCore = sap.ui.getCore();

                //get the ui control object on which we can call ui5 functions
                var oBtn = oCore.byId("idSpiderman");

                //chaining is possible like below
                //sap.ui.getCore().byId("idSpiderman")
                
                //NEVER use the document API
                //var oBtn = document.getElementById("idSpiderman");

                //we can change the text using the setter function
                oBtn.setText("Change ho gaya!");
            }
        });
    });