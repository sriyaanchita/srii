const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://<db_username>:<db_password>@cluster0.jezdj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Connection error', err);
});