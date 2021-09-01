import BCCol from './src'

BCCol.install = function (Vue) {
  Vue.component(BCCol.name, BCCol);
}

export default BCCol;