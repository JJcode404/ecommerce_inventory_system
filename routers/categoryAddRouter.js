import { Router } from "express";
import { getCategoryAddPage } from "../controllers/categoryAdd.js";

const categoryRouter = Router();
categoryRouter.get("/", getCategoryAddPage);

export { categoryRouter };
