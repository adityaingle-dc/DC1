const TellUsSubmission = require("../models/TellUsSubmission");

const submitTellUsForm = async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !company || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const submission = await TellUsSubmission.create({
      name,
      email,
      phone,
      company,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Tell Us form submitted successfully.",
      data: submission,
    });
  } catch (error) {
    console.error("Tell Us submission error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to save Tell Us form.",
    });
  }
};

module.exports = {
  submitTellUsForm,
};