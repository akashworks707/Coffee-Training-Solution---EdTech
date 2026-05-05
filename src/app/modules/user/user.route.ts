import express from "express";
import { UserControllers } from "./user.controller";
import { Role } from "./user.interface";
import { validateRequest } from "../../middleware/validateRequest";
import { createUserZodSchema } from "./user.validation";
import { checkAuth } from "../../middleware/checkAuth";

const router = express.Router();

router.post(
    '/create-user', 
    validateRequest(createUserZodSchema), 
    UserControllers.createUser
)
router.get('/me', checkAuth(...Object.values(Role)), UserControllers.getMe)
router.get("/all-users", checkAuth(Role.ADMIN), UserControllers.getAllUsers )

export const userRoutes = router;

