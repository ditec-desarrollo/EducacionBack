const { Router } = require("express");
const { traerMenu } = require("../controllers/menuControllers");

const router = Router();

router.get("/traerMenu", traerMenu)


module.exports = router;