const express = require('express');
const fs = require('fs')
const port = 3000;
const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`)
);

// app.get('/', (req, res) => {
//   res.status(200).send('Hello From server side anjay');
// });
// app.post('/', (req, res) => {
//     res.send('u cann also use method post!')
// })

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success anjay',
    results: tours.length,
    data: {
      tours,
    },
  });
});


app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
