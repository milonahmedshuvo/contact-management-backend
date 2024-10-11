import  { model, Schema } from 'mongoose';
import { TContact } from './contact.interface';



const contactSchema = new Schema <TContact> ({
  name: { type: String, required: true },
  email: { type: String, default: '' },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  profilePicture: { type: String, required: true },
});


// creating model
export const Contact = model<TContact>('Contact', contactSchema)

