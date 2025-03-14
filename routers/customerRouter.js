import { Router } from "express";
import { getcustomerAddPage } from "../controllers/customerController.js";

const customerRouter = Router();
customerRouter.get("/add", getcustomerAddPage);

export { customerRouter };
