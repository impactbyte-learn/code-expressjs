const controllers = {
  displayHelloWorld: (req, res) => {
    const data = {
      message: `Hello World!`,
      success: true
    };
    res.status(200).send(data);
  },

  displayName: (req, res) => {
    const data = {
      name: req.body.name
    };
    res.status(200).send(data);
  }
};

module.exports = controllers;
