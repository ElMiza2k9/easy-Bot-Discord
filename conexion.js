const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Nortdb:user-1@cluster0.2sa6s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log("Conectado a mongodb"))
.catch(err => console.log(err))