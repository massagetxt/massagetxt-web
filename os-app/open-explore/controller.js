exports.OLSKControllerUseLivereload = function() {
	return process.env.NODE_ENV === 'development';
};

exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/explore',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'MSWExploreRoute',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKLayoutRender(require('path').join(__dirname, 'ui-view'));
		},
		OLSKRouteLanguages: ['en'],
	}];
};
