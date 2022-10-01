import express from 'express'
import Mentor from '../models/Mentor.js'

const mentorRouter = express.Router()

//  getMentor Details
mentorRouter.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.find()
    res.send(mentors)
  } catch (err) {
    res.status(400).send(err)
  }
})

// create mentor
mentorRouter.post('/', async (req, res) => {
  const {
    name,
    email,
    course
  } = req.body
  const addMentor = new Mentor({
    name: name,
    email: email,
    course: course
  })
  try {
    const newMentor = await addMentor.save()
    res.send(newMentor)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

// Get mentor by ID
mentorRouter.get('/get-mentor/:id', async (req, res) => {
  const { id } = req.params
  try {
    const mentor = await Mentor.findById({ _id: id })
    res.status(200).send(mentor)
  } catch (err) {
    res.status(500)
    res.send(err)
  }
})

export default mentorRouter
