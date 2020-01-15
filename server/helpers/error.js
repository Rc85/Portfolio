module.exports = {
  log: (err, req, resp) => {
    console.log(err);
    if (resp === 'throw') {
      throw err;
    } else if (resp) {
      resp.status(err.statusCode || 500).send(err.message);
    }
  }
}