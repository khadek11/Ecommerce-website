import mongoose, { Schema, model } from 'mongoose';

enum EnquiryStatus {
  Submitted = 'Submitted',
  Contacted = 'Contacted',
  InProgress = 'In Progress',
  Resolved = 'Resolved',
}

interface Enquiry {
  name: string;
  email: string;
  mobile: string;
  comment: string;
  status: EnquiryStatus;
}

// Declare the Schema of the Mongo model
const enqSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: EnquiryStatus.Submitted,
    enum: Object.values(EnquiryStatus),
  },
});

// Export the model
export default model<Enquiry>('Enquiry', enqSchema);