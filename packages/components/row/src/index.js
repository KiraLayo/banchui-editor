import propsMixin from "~/components/mixins/props-mixin";

export default {
  name: "BCRow",
  mixins: [propsMixin],
  props: {
    gutter: Number,
    type: String, // flex
    justify: String, // start/end/center/space-around/space-between
    align: String, // top/middle/bottom
  }
}