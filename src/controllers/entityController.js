import { getConnection, queries } from "../databases"

const pool = await getConnection();

export const getRoles = async (req,res) => {
    try {
        pool.query(queries.getAllRole, function (error, results){
            if (error) throw error;
            res.send(results);
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getRolById = async (req,res) => {
    try {
        const {id} = req.params;
        pool.query(queries.GetRoleById, id, function (error, result){
            if (error) throw error;
            res.send(result);
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createNewRol = async (req,res) => {
    try {
        const data = req.body;
        pool.query(queries.newRol, data, function (error, results){
            if (error) throw error;
            res.send("Rol creado");
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updateRoleById = async (req,res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        pool.query(queries.UpdateRoleById, [data, id], function (error, result){
            if (error) throw error;
            res.send("Rol actualizado");
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteRol = async (req,res) => {
    try {
        const {id} = req.params;
        pool.query(queries.deleteRol, id, function (error, result){
            if (error) throw error;
            res.send("Rol elimado");
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}