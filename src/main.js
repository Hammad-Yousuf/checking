import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import InstagramWidget from './components/InstagramWidget.vue'; // Make sure to include the .vue extension
import VueScript2 from 'vue-script2'; // Make sure this is correctly imported if used

// Import BootstrapVue components
import { BSpinner, BModal } from 'bootstrap-vue';

// Register BootstrapVue components globally
Vue.component('b-spinner', BSpinner);
Vue.component('b-modal', BModal);

// Use vue-script2 if needed
Vue.use(VueScript2);

// Wrap the Vue component as a custom element
const WrappedElement = wrap(Vue, InstagramWidget);

// Define the custom element
if (!window.customElements.get('instagram-widget')) {
    window.customElements.define('instagram-widget', WrappedElement);
}

console.log('Main.js loaded');
