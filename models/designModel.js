const { model, Schema } = require("mongoose");

const user_schema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    components: {
      type: Array,
      default: [],
    },
    image_url: {
      type: String,
      default: "",
      select: false,
    },
  },
  { timestamps: true }
);

module.exports = model("designs", user_schema);
