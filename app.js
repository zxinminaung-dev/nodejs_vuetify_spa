const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3500;

const userRouter = require('./public/router/user.router');
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/src', express.static(path.join(__dirname, 'public/src')));
app.use('/icons', express.static(path.join(__dirname, 'public/icons')));
app.use('/views', express.static(path.join(__dirname, 'public/views')));

// Main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use("/api/user", userRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
