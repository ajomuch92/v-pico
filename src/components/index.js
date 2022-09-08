import PButton from './PButton.vue';

export default {
  install : (app, options) => {
    app.component('PButton', PButton);
  },
};