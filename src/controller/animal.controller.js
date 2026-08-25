const { json } = require("express");

let Animales = [
    {id: 1, nombre: "Firulais", especie: "Perro", edad: 3, adoptado: false},
];

const obtenerAnimales = (req, res) => {
    res.json(Animales);
};

const obtenerAnimalId = (req, res) =>  {
    const id = parseInt(req.params.id);
    const animal = Animales.find((b) => b.id === id);
    if(!animal){
        return res.status(404).json({mensaje: "Animal no encontrado"});
    }

    res.json(animal);

};

const CrearAnimal = (req, res) => {
    const {nombre, especie, edad} = req.body;
    if (!nombre || !especie || !edad) {
        return res.status(400).json({mensaje: "Nombre obligatorio"});
    }

    const NuevoAnimal = {
        id: Animales.length > 0 ? Animales[Animales.length -1].id + 1 : 1,
        nombre,
        especie,
        edad,
        adoptado : false
    }
    Animales.push(NuevoAnimal);
    res.status(201).json(NuevoAnimal);
};

const ActualizarAnimal = (req,res) => {
    const id = parseInt(req.params.id);
    const {nombre, especie, edad,adoptado} = req.body;

    const index = Animales.findIndex((b)=> b.id === id);

    if (index === -1){
        return res.status(404).json({mensaje: "Animal no encontrado"});
    }


    Animales[index] = {
        ...Animales[index],
        nombre : nombre || Animales[index].nombre,
        especie : especie || Animales[index].especie,
        edad : edad || Animales[index].edad,
        adoptado : adoptado || Animales[index].adoptado
    };

    res,json(Animales[index]);
};

const EliminarAnimal = (req,res) => {
    const id = parseInt(req.params.id);
    const index = Animales.findIndex((b) => b.id === id);

    if(index === -1) {
        return res.status(404).json({mensaje: "animal no encontrado"});
    }

    Animales = Animales.filter((b)=> b.id !== id);
    res.json({mensaje: "Animal eliminado correctamente"});
};



module.exports = {obtenerAnimales,obtenerAnimalId,CrearAnimal,ActualizarAnimal,EliminarAnimal};