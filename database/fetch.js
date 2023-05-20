app.get('/examples', (req, res) => {
    ExampleModel.find({}, (err, examples) => {
      if (err) {
        console.error('Error fetching data from MongoDB', err);
        res.status(500).send('Error fetching data from MongoDB');
      } else {
        res.json(examples);
      }
    });
  });