import BCRadio from './src'

BCRadio.install = function (Vue) {
  Vue.component(BCRadio.name, BCRadio)
}

export default BCRadio