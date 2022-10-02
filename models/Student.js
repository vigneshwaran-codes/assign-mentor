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
    ref: 'Mentor',
    default: undefined
  }
})

const StudentModel = mongoose.model('Student', studentSchema)

export default StudentModel
