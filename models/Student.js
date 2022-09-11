import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    default: undefined,
    ref: 'Mentor'
  }
})

const Student = mongoose.model('Student', studentSchema)

export default Student
