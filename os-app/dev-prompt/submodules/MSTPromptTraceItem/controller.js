exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/MSWPromptTraceItem',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction: function(req, res, next) {
			return res.render(require('path').join(__dirname, 'stub-view'), {
				OLSKPagePublicLocalizedStringKeys: ['MSWPromptTraceItemInputHeadingText'],
			});
		},
		OLSKRouteSignature: 'MSWPromptTraceItemStubRoute',
		OLSKRouteLanguages: ['en'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};