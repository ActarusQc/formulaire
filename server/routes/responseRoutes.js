const express = require('express');
const router = express.Router();
const Response = require('../models/Response');
const Form = require('../models/Form');
const nodemailer = require('nodemailer');

// Create a new response
router.post('/', async (req, res) => {
  const response = new Response({
    formId: req.body.formId,
    responses: req.body.responses,
    submittedBy: req.body.submittedBy,
  });

  try {
    const newResponse = await response.save();
    
    // Fetch the form to get recipients
    const form = await Form.findById(req.body.formId);
    
    // Send email to recipients
    await sendEmailToRecipients(form.recipients, newResponse);

    res.status(201).json(newResponse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Reassign a response
router.patch('/:id/reassign', async (req, res) => {
  try {
    const response = await Response.findById(req.params.id);
    if (!response) {
      return res.status(404).json({ message: 'Response not found' });
    }

    response.reassignedTo = req.body.reassignedTo;
    response.status = 'reassigned';

    const updatedResponse = await response.save();
    res.json(updatedResponse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get responses for a specific form
router.get('/form/:formId', async (req, res) => {
  try {
    const responses = await Response.find({ formId: req.params.formId });
    res.json(responses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function sendEmailToRecipients(recipients, response) {
  // Configure nodemailer with your email service
  let transporter = nodemailer.createTransport({
    // Add your email service configuration here
  });

  let mailOptions = {
    from: 'your-email@example.com',
    to: recipients.join(', '),
    subject: 'New Form Response',
    text: `A new response has been submitted. Response ID: ${response._id}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent to recipients');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = router;