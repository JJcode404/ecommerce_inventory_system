import { Router } from "express";
import { addProduct, getproductAddPage } from "../controllers/productAdd.js";
import { validateProduct } from "../validators/productValidator.js";

const productRouter = Router();
productRouter.get("/addProduct", getproductAddPage);
productRouter.post("/addProduct", addProduct);

export { productRouter };
