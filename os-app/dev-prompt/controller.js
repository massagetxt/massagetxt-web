exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/prompt',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'MSWPromptRoute',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'ui-view'));
		},
		OLSKRouteLanguageCodes: ['en'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
