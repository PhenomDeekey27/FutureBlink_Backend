const { Agenda } = require('agenda');
const dotenv = require('dotenv');
dotenv.config();

const agenda = new Agenda({ db: { address: process.env.MONGO_URI, collection: 'agendaJobs' } });



const startAgenda = async () => {
  await agenda.start();
  console.log('Agenda started');
};

module.exports = { agenda, startAgenda };
