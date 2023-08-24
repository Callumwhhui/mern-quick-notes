const Note = require ('../../models/note')


module.exports = {
    index, 
    addNote,
};

async function index(req,res) {
    try {
        const notes = await Note.find({user: req.user});
        res.json(notes);
    } catch (error){
        res.status(500).json({error: 'error adding notes'})
    }
}


async function addNote(req, res) {
    console.log(req.body)
    try {
      const { text } = req.body;
      const user = req.user; // Assuming you're using user authentication
        console.log('**** ', text)
      const newNote = await Note.create({ text, user });
      console.log('**** ', newNote)
      res.status(201).json(newNote);
    } catch (error) {
      res.status(500).json({ error: 'Error adding note' });
    }
  }
  