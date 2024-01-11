sap.ui.define([
    './BaseController.controller',
    "sap/ui/core/routing/History"
], function(Controller,History ) {
    'use strict';
    return Controller.extend("app.controller.EmpDetails",{
      
        onInit() {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("details").attachPatternMatched(this.onObjectMatched, this);
		},

		onObjectMatched(oEvent) {
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").employeeId),
				model: "employee"
			});
		},
        // onNavBack() {
		// 	const oHistory = History.getInstance();
		// 	const sPreviousHash = oHistory.getPreviousHash();

		// 	if (sPreviousHash !== undefined) {
		// 		window.history.go(-1);
		// 	} else {
		// 		const oRouter = this.getOwnerComponent().getRouter();
		// 		oRouter.navTo("initial", {}, true);
		// 	}
		// }
    });
});