exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/MSTExplorerTraceItem',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction: function(req, res, next) {
			return res.render(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'MSTExplorerTraceItemStubRoute',
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
