import BCEditor from './src'

BCEditor.install = function (Vue) {
  Vue.component(BCEditor.name, BCEditor);
};

export default BCEditor;