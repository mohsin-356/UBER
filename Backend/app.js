const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT=process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',function(req, res) {
    res.send('Hello World');
})

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
});