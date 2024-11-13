const { conectar_BD_EDUCACION_MySql } = require("../config/dbEstadisticasMYSQL");
const fs = require("fs");
const path = require("path");

const traerMenu = async (req, res) => {
    const connection = await conectar_BD_EDUCACION_MySql();
    try {
        const [opciones] = await connection.execute(
        "SELECT * FROM opcion WHERE habilita = 1"
        );
        res.status(200).json({ opciones });
    } catch (error) {
        res.status(500).json({ message: error.message || "Algo salió mal :(" });
    } finally {
        if (connection) {
        connection.end();
        }
    }
};

module.exports = { traerMenu };
