const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Get all forms
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new form
router.post('/', async (req, res) => {
  const form = new Form({
    title: req.body.title,
    fields: req.body.fields,
    recipients: req.body.recipients,
    createdBy: req.body.createdBy,
  });

  try {
    const newForm = await form.save();
    res.status(201).json(newForm);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a specific form
router.get('/:id', getForm, (req, res) => {
  res.json(res.form);
});

// Update a form
router.patch('/:id', getForm, async (req, res) => {
  if (req.body.title != null) {
    res.form.title = req.body.title;
  }
  if (req.body.fields != null) {
    res.form.fields = req.body.fields;
  }
  if (req.body.recipients != null) {
    res.form.recipients = req.body.recipients;
  }

  try {
    const updatedForm = await res.form.save();
    res.json(updatedForm);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a form
router.delete('/:id', getForm, async (req, res) => {
  try {
    await res.form.remove();
    res.json({ message: 'Form deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getForm(req, res, next) {
  let form;
  try {
    form = await Form.findById(req.params.id);
    if (form == null) {
      return res.status(404).json({ message: 'Form not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.form = form;
  next();
}

module.exports = router;