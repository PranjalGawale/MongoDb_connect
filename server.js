const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@cluster0.mvtnsn9.mongodb.net/?retryWrites=true&w=majority")

.then(() => console.log('Connected successfully'))
    .catch((err) => { console.error(err); });