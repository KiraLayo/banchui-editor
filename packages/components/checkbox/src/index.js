import propsMixin from "~/components/mixins/props-mixin";

export default {
  name: "BCCheckbox",
  mixins: [propsMixin],
  props: {
    options: Array, // { label: String, value: String }
    value: Array,
  },
};