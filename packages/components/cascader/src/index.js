import propsMixin from "~/components/mixins/props-mixin";

export default {
  name: "BCCascader",
  mixins: [propsMixin],
  props: {
    value: String, // 默认只有叶子节点有效
    options: Array, // {label: String, value: String /* 叶子节点才有 */, items: Array /* 子节点, 非空判断则不是叶子节点 */ }
  }
}