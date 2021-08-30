import propsMixin from "~/components/mixins/props-mixin";

export default {
  name: "BCDatePicker",
  mixins: [propsMixin],
  props: {
    type: String, // date、dateTime、time、dateRange、timeRange、dateTimeRange
    placeholder: [Array, String], // 如果是 range 类型，则需要是Array，[String //开始, String //结束]
    value: [Array, Date], // 如果是 range 类型，则需要是Array，[Date //开始, Date //结束]
  }
}