const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./utils/db");
const Disco = require("./models/disco.model");

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended:false}));

connect();

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const newDisco = new Disco(req.body);
    await newDisco.save();
    return res.status(201).json(newDisco);
  } catch (error) {
    return res.status(400).json("Error al crear el disco");
  }
});
router.get("/discos", async (req, res) => {
  try {
    const discos = await Disco.find();
    return res.status(200).json(discos);
  } catch (error) {
    return res.status(404).json("Disco no encontrado");
  }
});

server.use("/", router);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
