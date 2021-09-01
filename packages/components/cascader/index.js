import BCCascader from './src'

BCCascader.install = function (Vue) {
  Vue.component(BCCascader.name, BCCascader);
}

export default BCCascader;