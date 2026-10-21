import express, { type Express, type Request, type Response } from 'express'
import { messages } from './messages_data/messages.js'

const app: Express = express()
app.use(express.json())


// CREATE //
app.post('/messages', (req: Request, res: Response) => {
  const message = { id: messages.length + 1, ...req.body}
  
  const duplicateId = messages.some((msg) => msg.id === message.id)

  if(duplicateId)
  {
    return res.status(409).json({error: `Message with id ${message.id} already exists`})
  }

  messages.push(message)
  res.status(201).json(`Message with id ${message.id} successfully added`)
})


// READ //

// Get all messages
app.get('/messages', (req: Request, res: Response) => {
  res.json(messages)
})

// Get single message by id
app.get('/messages/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const message = messages.find((message) => message.id === id)

  if(!message)
  {
    return res.status(404).json(`Message with id ${id} not found`)
  }

  res.json(message)
})


// UPDATE //
app.put('/messages/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const message = messages.find((message) => message.id === id)

  if(!message)
  {
    return res.status(404).json(`Message with id ${id} not found`)
  }

  const { text } = req.body

  if(typeof text !== 'string' || text.trim() === '')
  {
    return res.status(400).json({ error: 'Text must be a non-empty string '})
  }

  message.text = text

  res.json(message)
})


// DELETE //
app.delete('/messages/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const messageIndex = messages.findIndex((message) => message.id === id)

  if(messageIndex === -1)
  {
    return res.status(404).json(`Message with id ${id} not found`)
  }

  messages.splice(messageIndex, 1)
  res.status(204).send()
})

export default app