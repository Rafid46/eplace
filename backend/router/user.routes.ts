import { Router } from "express";
import { login, register } from "../controllers/user.controller";

const userRoutes = Router();
// userRoutes.get("/users");
userRoutes.post("/create-user", register);
userRoutes.post("/login", login);

export default userRoutes;
