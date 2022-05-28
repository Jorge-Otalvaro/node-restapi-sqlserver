// import { Request, RequestHandler, Response } from 'express';
import { Router } from "express";
import { getRoles,getRolById, createNewRol, updateRoleById, deleteRol } from "../controllers/entityController";

const router = Router()

router.get('/roles', getRoles)
router.get('/roles/:id', getRolById)
router.post('/roles', createNewRol)
router.put('/roles/:id', updateRoleById)
router.delete('/roles/:id', deleteRol)

export default router