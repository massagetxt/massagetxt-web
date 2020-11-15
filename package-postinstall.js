(function OLSKPostinstallHotfix() {
	if (process.env.NODE_ENV === 'production') {
		return;
	}

	Object.entries(require('OLSKHotfix').OLSKHotfixPatches()).forEach(function ([path, patches]) {
		if (!require('fs').existsSync(path)) {
			return;
		}
		
		Object.entries(patches).forEach(function ([search, replace]) {
			require('fs').writeFileSync(path, require('OLSKString').OLSKStringPatch(
				require('fs').readFileSync(path, 'utf8'), search, replace));
		});
	});
})();

(function OLSKPostinstallExternalAssets() {
	require('./node_modules/OLSKExpress/modules/OLSKAssets/main.js').OLSKAssetsCopyAssetsFromTo([
		'codemirror',
		'normalize.css',
		'OLSKLanguageSwitcher',
		'OLSKLayout',
		'OLSKRootLink',
		'OLSKRouting',
		'ROCORootLink',
	], require('path').join(__dirname, 'node_modules'), require('path').join(__dirname, 'os-app/_shared/__external'));
})();
