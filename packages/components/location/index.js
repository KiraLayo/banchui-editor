import BCLocation from './src'

BCLocation.install = function (Vue) {
  Vue.component(BCLocation.name, BCLocation);
}

export default BCLocation;