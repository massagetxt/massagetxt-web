const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute._OLSKRouteLanguages.forEach(function (languageCode) {

const uLocalized = function (inputData) {
	return OLSKTestingLocalized(inputData, languageCode);
};

describe(`MSWGuide_Localize-${ languageCode }`, function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('localizes title', function() {
		browser.assert.text('title', uLocalized('MSWGuideTitle'))
	});

	it('localizes description', function() {
		browser.assert.attribute('meta[name=description]', 'content', uLocalized('MSWGuideDescription'))
	});

});

})
