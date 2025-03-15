import { Router } from "express";
import { getproductAddPage } from "../controllers/productAdd";

const productRouter = Router();
productRouter.get("/addProduct", getproductAddPage);

export { productRouter };
