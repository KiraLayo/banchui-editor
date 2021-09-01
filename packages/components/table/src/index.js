import propsMixin from "~/components/mixins/props-mixin";

export default {
  name: "BCTable",
  mixins: [propsMixin],
  props: {
    value: Array
  }
}