import propsMixin from "~/components/mixins/props-mixin";

export default {
  name: "BCEditor",
  mixins: [propsMixin],
  props: {
    value: String
  }
}