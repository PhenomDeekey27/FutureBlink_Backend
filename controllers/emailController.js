const { agenda } = require('../utils/agenda');

const scheduleEmail = async (req, res) => {
  const { to, subject, body, delay } = req.body;

  console.log(req.body,"resbody")

  if (!to || !subject || !body) {
    return res.status(400).json({ message: "Missing fields: to, subject, body required." });
  }
  if(!delay){
    return res.status(400).json({
      messge:"Delay in time is required "

    })
  }

  try {
    await agenda.schedule(delay, "send email job", { to, subject, body });
    return res.status(200).json({ message: "Email scheduled successfully for 1 hour later." });
  } catch (error) {
    console.error("Agenda scheduling error:", error);
    return res.status(500).json({ message: "Failed to schedule email." });
  }
};

module.exports = { scheduleEmail };
