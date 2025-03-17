import { Router } from "express";
import { addCategory, getCategoryAddPage } from "../controllers/categoryAdd.js";
import { validateCategory } from "../validators/categoryValidator.js";

const categoryRouter = Router();
categoryRouter.get("/addCategory", getCategoryAddPage);
categoryRouter.post("/addCategory", validateCategory, addCategory);

export { categoryRouter };
