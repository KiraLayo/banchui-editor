import FMCInput from "./src"

FMCInput.install = function (Vue) {
  Vue.component(FMCInput.name, FMCInput);
}

export default FMCInput;