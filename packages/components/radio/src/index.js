import propsMixin from "~/components/mixins/props-mixin";

export default {
  name: "BCRadio",
  mixins: [propsMixin],
  props: {
    options: Array, // { label: String, value: String }
    value: [String, Number]
  },
};