const email = require('@sendgrid/mail');
email.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  send: async(to, from, content) => {
    const message = {
      to,
      from: {
        name: `${from.first_name} ${from.last_name}`,
        email: from.email
      },
      subject: 'Inquiry from rogerchin.dev',
      text: content,
      html: content
    }

    await email.send(message)
    .then(() => {
      return true;
    })
    .catch(err => {
      throw err;
    });
  }
}