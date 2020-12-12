const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSWGuide_Misc', function () {

	before(function () {
		return browser.OLSKVisit(kDefaultRoute)
	});

	context('MSWGuide', function () {
		
		it('classes OLSKCommon', function () {
			browser.assert.hasClass(MSWGuide, 'OLSKCommon');
		});

		it('classes OLSKCommonCapped', function () {
			browser.assert.hasClass(MSWGuide, 'OLSKCommonCapped');
		});
	
	});

	describe('MSWGuideCrown', function test_MSWGuideCrown() {

		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(MSWGuideCrown, 'OLSKCommonCard');
		});

		it('classes OLSKCommonCrownCard', function () {
			browser.assert.hasClass(MSWGuideCrown, 'OLSKCommonCrownCard');
		});
		
	});

	describe('MSWGuideCrownLogo', function () {

		it('sets role', function () {
			browser.assert.attribute(MSWGuideCrownLogo, 'role', 'presentation');
		});

		it('sets src', function () {
			browser.assert.attribute(MSWGuideCrownLogo, 'src', '/_shared/KOMRootLink/ui-assets/identity.svg');
		});

	});

});
