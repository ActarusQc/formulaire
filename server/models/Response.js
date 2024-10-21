const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
  responses: { type: Map, of: String },
  submittedBy: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
  reassignedTo: { type: String },
  status: { type: String, enum: ['submitted', 'reassigned', 'completed'], default: 'submitted' },
});

module.exports = mongoose.model('Response', ResponseSchema);