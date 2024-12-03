import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import { upload } from "../middlewares/mutler.js";

const router = express.Router();

router
  .route("/company-register")
  .post(isAuthenticated, upload, registerCompany);
router.route("/companies").get(isAuthenticated, getCompany);
router.route("/:id").get(isAuthenticated, getCompanyById);
router.route("/update/:id").put(isAuthenticated, upload, updateCompany);

export default router;
