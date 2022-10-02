import mongoose from 'mongoose'

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  course: {
    type: String,
    required: true
  }
})

const MentorModel = mongoose.model('Mentor', mentorSchema)

export default MentorModel
