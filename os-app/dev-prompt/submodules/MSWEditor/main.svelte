<script>
export let MSWEditorInitialValue = '';
export let MSWEditorOptions = {};
export let MSWEditorDispatchValueDidChange = null;

export const modPublic = {

	MSWEditorSetValue (inputData) {
		mod._ValueCodeMirrorInstance.setValue(inputData);
		mod._ValueCodeMirrorInstance.getDoc().clearHistory();
	},

	EditorConfigure (e) {
		// console.log(mod._ValueCodeMirrorInstance ? 'run' : 'queue', e);
		return mod._ValueCodeMirrorInstance ? e(mod._ValueCodeMirrorInstance) : mod._ValuePostInitializeQueue.push(e);
	},

};

import { OLSK_SPEC_UI } from 'OLSKSpec'

const mod = {

	// INTERFACE

	InterfaceInputDebugDidInput (event) {
		if (MSWEditorDispatchValueDidChange) {
			MSWEditorDispatchValueDidChange(this.value);
		}
	},

	// VALUE

	_ValuePostInitializeQueue: [],

	// SETUP

	SetupEverything () {
		if (OLSK_SPEC_UI()) {
			return;
		}

		mod.SetupCodeMirrorInstance();

		// console.log(mod._ValuePostInitializeQueue);
		
		mod._ValuePostInitializeQueue.splice(0, mod._ValuePostInitializeQueue.length).forEach(function(e) {
			// console.log('run', e);

			return e(mod._ValueCodeMirrorInstance);
		});
	},

	SetupCodeMirrorInstance() {
		mod._ValueCodeMirrorInstance = CodeMirror.fromTextArea(mod._ModuleInstanceElement, MSWEditorOptions);

		mod._ValueCodeMirrorInstance.setValue(MSWEditorInitialValue);

		mod._ValueCodeMirrorInstance.on('change', function (instance, changeObject) {
			if (changeObject.origin === 'setValue') {
				return;
			}

			if (MSWEditorDispatchValueDidChange) {
				MSWEditorDispatchValueDidChange(instance.getValue());
			}
		});

		mod._ValueCodeMirrorInstance.focus();
	},

	// LIFECYCLE

	LifecycleComponentDidMount () {
		mod.SetupEverything();
	},

}

import { onMount } from 'svelte';
onMount(mod.LifecycleComponentDidMount);
</script>

<div class="MSWEditor">

{#if OLSK_SPEC_UI()}
	<textarea class="MSWEditorFieldDebug" on:input={ mod.InterfaceInputDebugDidInput } value={ MSWEditorInitialValue }></textarea>
{/if}

<textarea class="MSWEditorField" bind:this={ mod._ModuleInstanceElement }></textarea>

</div>
