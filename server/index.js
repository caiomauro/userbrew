const express = require("express");
const axios = require("axios");
const app = express();

app.get("/api/randomuser", (req, res) => {
  axios
    .get("https://api.api-ninjas.com/v1/randomuser", {
      headers: {
        "X-Api-Key": "rYZpj+cX3gxRKnKg5eEB/w==JZ6ELBj7e8BcbTLw",
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred");
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
