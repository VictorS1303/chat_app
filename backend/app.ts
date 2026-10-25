import express, { type Express, type Request, type Response } from 'express'
import connection from './messages.js'

const app: Express = express()
app.use(express.json())

// CREATE //
app.post('/messages', async (req: Request, res: Response) =>
{
  try
  {
    const { message } = req.body

    if(typeof message !== 'string' || !message.trim())
    {
      return res.status(400).json({ error: 'Message text is required' })
    }

    const result = await connection.query(
      'INSERT INTO messages (text) VALUES ($1) RETURNING *',
      [message.trim()]
    )

    return res.status(201).json(result.rows[0])
  }
  catch(error)
  {
    console.error('Database query failed:', error)
    res.status(500).json({ error: 'Database query failed' })
  }
})

// READ //

// Get all messages from PostgreSQL
app.get('/messages', async (req: Request, res: Response) =>
{
  try
  {
    const result = await connection.query('SELECT * FROM messages ORDER BY id')
    console.log(result.rows)

    res.json(result.rows)
  }
  catch(error)
  {
      console.error('Database query failed:', error)
      res.status(500).json({ error: 'Database query failed'})
  }
})

// Get single message by id
app.get('/messages/:id', async (req: Request, res: Response) => {
  try
  {
    const id = Number(req.params.id)
    if(!Number.isInteger(id) || id <= 0)
    {
      return res.status(400).json({ error: 'Invalid message ID'})
    }

    const result = await connection.query('SELECT * FROM messages WHERE id = $1', [id])

    if(result.rows.length === 0)
    {
      return res.status(404).json({ error: `Message with id ${id} not found`})
    }

    res.json(result.rows[0])
  }
  catch(error)
  {
      console.error('Database query failed:', error)
      res.status(500).json({ error: 'Database query failed' })
  }
})


// UPDATE //

/*
  For now, this method essentially does the same as the PATCH method underneath, since only the text is to be updated at the moment.
*/ 
app.put('/messages/:id', async (req: Request, res: Response) =>
{
  try
  {
    const id = Number(req.params.id)
    
    if(!Number.isInteger(id) || id <= 0)
    {
      return res.status(400).json({ error: 'Invalid message ID'})
    }

    const { text } = req.body
      
    const result = await connection.query('UPDATE messages SET text = $1 WHERE id = $2', [text, id]) 

    if(result.rowCount === 0)
    {
      return res.status(404).json({ error: `No message found with id ${id}`})
    }

    return res.status(200).json({ message: `Message with ${id} successfully updated.`})
  }
  catch(error)
  {
    console.error('Database query failed:', error)
    res.status(500).json({ error: 'Database query failed' })
  }

})

/*
  For now, this does the same as the PUT method above, but it might become necessary later, if more fields can be edited.
*/ 
app.patch('/messages/:id', async (req: Request, res: Response) => {
  try
  {
    const id = Number(req.params.id)
    
    if(!Number.isInteger(id) || id <= 0)
    {
      return res.status(400).json({ error: 'Invalid message ID'})
    }

    const { text } = req.body

    if(text === undefined)
    {
      return res.status(400).json({ error: 'No fields provided to update'})
    }

    const result = await connection.query('UPDATE messages SET text = $1 WHERE id = $2', [text, id])

    if(result.rowCount === 0)
    {
      return res.status(404).json({ error: `No message with id ${id} was found`})
    }

    return res.status(200).json({ message: `Message with id ${id} successfully updated`})
  }
  catch(error)
  {
    console.error('Database query failed:', error)
    res.status(500).json({ error: 'Database query failed' })
  }
})

// DELETE //
app.delete('/messages/:id', async (req: Request, res: Response) => {
  try
  { 
    const id = Number(req.params.id)

    if(!Number.isInteger(id) || id <= 0)
    {
      return res.status(400).json({ error: 'Invalid message ID'})
    }

    const result = await connection.query('DELETE FROM messages WHERE id = $1', [id])

    if(result.rowCount === 0)
    {
      return res.status(404).json({ error: `No message found with id ${id}`})
    }

    return res.status(200).json({ message: `Message with ${id} successfully deleted.`})
  }
  catch(error)
  {
    console.error('Database query failed:', error)
    res.status(500).json({ error: 'Database query failed' })
  }
})


export default app