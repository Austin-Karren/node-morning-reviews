const express = require("express");
const app = express();
const port = 4712;
const users = require('../users.json');

app.get('/api/users', (req, res) => {
   res.status(200).send(users);
})

app.get('/api/users/:id', (req, res) => {
   // or you can use req.params.id instead of destructuring
   const {id} = req.params;
   const user = users.find(user => user.id === +id);
   if(!user) {
      return res.status(500).send('Cannot find user')
   }
   res.status(200).send(user);
})

// app.use(express.json());
app.listen(port, () => console.log(`Server running on port: ${port}`));