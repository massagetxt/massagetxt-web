import { deepEqual } from 'assert';

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('MSTExplorer_Misc', function () {

describe('MSTExplorerRawEditor', function() {
	
	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			MSTExplorerRaw: 'alfa',
		}));
	});

	it('initializes to MSTExplorerRaw', function () {
		browser.assert.input(`${ MSTExplorerRawEditor } .MSTEditorFieldDebug`, 'alfa')
	});
	
});
	
describe('MSTExplorerMassageEditor', function() {
	
	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			MSTExplorerMassage: '$input',
		}));
	});

	it('initializes to MSTExplorerMassage', function () {
		browser.assert.input(`${ MSTExplorerMassageEditor } .MSTEditorFieldDebug`, '$input')
	});
	
});
	
describe('MSTExplorerTraceItem', function() {
	
	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			MSTExplorerRaw: 'alfa',
			MSTExplorerMassage: '$input',
		}));
	});

	it('initializes to result', function () {
		browser.assert.elements(MSTExplorerTraceItem, 1)
	});

	it('sets MSTExplorerTraceItemOperation', function () {
		browser.assert.text(MSTExplorerTraceItemOperation, '$input')
	});

	context('update MSTExplorerMassage', function () {

		before(function () {
			browser.fill(`${ MSTExplorerMassageEditor } .MSTEditorFieldDebug`, '$input.lines');
		});

		it('updates elements', function () {
			browser.assert.elements(MSTExplorerTraceItem, 2)
		});
	
	});

});
	
describe('MSTExplorerOutput', function() {
	
	before(function() {
		return browser.visit(OLSKTestingCanonicalFor(kDefaultRoute.OLSKRoutePath, {
			MSTExplorerRaw: 'alfa',
			MSTExplorerMassage: '$input',
		}));
	});

	it('initializes to result', function () {
		browser.assert.text(MSTExplorerOutput, 'alfa')
	});

	context('update MSTExplorerRaw', function () {

		before(function () {
			browser.fill(`${ MSTExplorerRawEditor } .MSTEditorFieldDebug`, 'bravo');
		});
		
		it('sets value', function () {
			browser.assert.text(MSTExplorerOutput, 'bravo')
		});
	
	});

	context('update MSTExplorerMassage', function () {

		before(function () {
			browser.fill(`${ MSTExplorerMassageEditor } .MSTEditorFieldDebug`, '$input.prepend(alfa )');
		});
		
		it('sets value', function () {
			browser.assert.text(MSTExplorerOutput, 'alfa bravo')
		});
	
	});
	
});
	
});