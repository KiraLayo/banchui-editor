import BCTable from './src'

BCTable.install = function (Vue) {
  Vue.component(BCTable.name, BCTable);
}

export default BCTable;