import BCUpload from './src'

BCUpload.install = function (Vue) {
  Vue.component(BCUpload.name, BCUpload)
}

export default BCUpload