const { Router} = require("express");
const {obtenerAnimales, obtenerAnimalId, CrearAnimal, ActualizarAnimal, EliminarAnimal} = require("../controller/animal.controller");

const router = Router();

router.get("/Animales",obtenerAnimales);
router.get("/Animales/:id",obtenerAnimalId);
router.post("/Animales",CrearAnimal);
router.put("/Animales/:id",ActualizarAnimal);
router.delete("/Animales/:id",EliminarAnimal);

module.exports = router;