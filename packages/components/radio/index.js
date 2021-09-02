import FMCRadio from './src'

FMCRadio.install = function (Vue) {
  Vue.component(FMCRadio.name, FMCRadio);
}

export default FMCRadio;