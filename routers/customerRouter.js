import { Router } from "express";
import {
  addCustomer,
  getcustomerAddPage,
} from "../controllers/customerController.js";
import { validateCustomer } from "../validators/customerValidator.js";

const customerRouter = Router();
customerRouter.get("/addCustomer", getcustomerAddPage);
customerRouter.post("/addCutomer", validateCustomer, addCustomer);

export { customerRouter };
