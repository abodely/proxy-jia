const nr = require('newrelic');
const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 8000;

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/homes/:homeid', express.static(path.join(__dirname, '../public')));

app.get('/api/home/:homeid/photos', (req, res) => {
  axios.get(`http://localhost:3001/api/home/${req.params.homeid}/photos`)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => res.status(400).send(err));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// app.get('/bookings/:accommodationid/reserve', (req, res) => {
//   axios.get(`http://localhost:3003/bookings/${req.params.accommodationid}/reserve`)
//     .then(response => {
//       res.send(response.data);
//     });
// });

// app.get('/bookings/:accommodationid/reserve/:startDate&:endDate', (req, res) => {
//   axios.get(`http://localhost:3003/bookings/${req.params.accommodationid}/reserve/${req.params.startDate}&${req.params.endDate}`)
//     .then(response => {
//       res.send(response.data);
//     });
// });

// app.get('/abodes/:abode_id/reviews', (req, res) => {
//   axios.get(`http://localhost:3002/abodes/${req.params.abode_id}/reviews`)
//     .then(response => {
//       res.send(response.data);
//     });
// });

// app.get('/homes', (req, res) => {
//   axios.get(`http://localhost:3004/homes`)
//     .then(response => {
//       res.send(response.data);
//     });
// });

