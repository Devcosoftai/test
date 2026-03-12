const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    company: {
      type: String,
      trim: true,
      maxlength: [100, 'Company name cannot exceed 100 characters'],
    },
    service: {
      type: String,
      enum: [
        'Full-Stack Development',
        'Mobile App Development',
        'Cloud & DevOps',
        'AI & Automation',
        'SaaS Product Development',
        'UI/UX Design',
        'Other',
        '',
      ],
      default: '',
    },
    budget: {
      type: String,
      enum: ['Under $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+', ''],
      default: '',
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },
    status: {
      type: String,
      enum: ['new', 'read', 'replied', 'archived'],
      default: 'new',
    },
    ipAddress: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contact', contactSchema);
