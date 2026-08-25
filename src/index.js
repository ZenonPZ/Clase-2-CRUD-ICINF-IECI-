const express = require("express");
const AnimalRoutes = require("./routes/animal.routes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api",AnimalRoutes);

app.listen(PORT, ()=> {
    console.log('servidor escuchando en http://localhost:${PORT}');
});