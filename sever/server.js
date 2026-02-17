const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello! Your Express server is running 🚀');
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});