const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fields: [
    {
      type: { type: String, required: true },
      label: { type: String, required: true },
      options: [String],
    },
  ],
  recipients: [String],
  createdBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Form', FormSchema);