const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    items: [{ type: String }],
    order: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service', serviceSchema);
