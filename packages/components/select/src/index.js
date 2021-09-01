import propsMixin from "~/components/mixins/props-mixin";

export default {
  name: "BCSelect",
  mixins: [propsMixin],
  props: {
    options: Array, // { label: String, value: String }
    value: String
  }
}