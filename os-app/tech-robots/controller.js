exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/robots.txt',
		OLSKRouteMethod: 'get',
		OLSKRouteSignature: 'MSWRobotsRoute',
		OLSKRouteFunction (req, res, next) {
			return res.send(require('OLSKRobots').OLSKRobotsTXT([
				'MSWVitrineRoute',
				'MSWGuideRoute',
			].reduce(function (coll, item) {
				return coll.concat(res.locals.OLSKCanonicalFor(item)).concat((res.locals.OLSKRouteObjectFor(item).OLSKRouteLanguages || []).map(function (e) {
					return res.locals.OLSKCanonicalLocalizedFor(item, {
						OLSKRoutingLanguage: e,
					});
				}));
			}, [])));
		},
	}];
};