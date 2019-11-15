import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

const uFormatted = OLSKTestingStringWithFormat;

kDefaultRoute.OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`MSWRootLink_Localize-${ languageCode }`, function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKRoutingLanguage: languageCode,
		});
	});

	it('localizes title', function () {
		browser.assert.attribute(MSWRootLink, 'title', uFormatted(uLocalized('MSWSharedColonSeparatedFormat'), uLocalized('MSWRootLinkLogoLabel'), uLocalized('MSWRootLinkText')))
	});

	it('localizes href', function () {
		browser.assert.attribute(MSWRootLink, 'href', OLSKTestingCanonicalFor('/', {
			OLSKRoutingLanguage: languageCode,
		}));
	});

});

});
