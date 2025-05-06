const express = require('express');
const dotenv = require('dotenv');
const emailRoutes = require('./routes/emailRoutes');
const { startAgenda } = require('./utils/agenda');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/email', emailRoutes);
app.use("/",(req,res)=>{
  return res.status(200).send({
    message:"FutureBlink Email sending Backend Get Request Working"
  })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await startAgenda(); // Start Agenda after server starts
});
