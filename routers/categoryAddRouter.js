import { Router } from "express";
import { getCategoryAddPage } from "../controllers/categoryAdd.js";

const categoryRouter = Router();
categoryRouter.get("/addCategory", getCategoryAddPage);

export { categoryRouter };
