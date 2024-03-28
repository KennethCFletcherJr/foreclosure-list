import Router from "express";
//Router from experess is a default function? So no braces.
import {
  createProperty,
    getAllProperties,
    getOneProperty,
    updateOneProperty,
    deleteOneProperty
} from "../controllers/property.controllers.js";

const router = Router();

//all routes with the ("/books") path.
router.route("/properties")
.get(getAllProperties)
.post(createProperty);

//all the routes with the ("/books/:id") path.
router.route("/properties/:id")
  .get(getOneProperty)
  .put(updateOneProperty)
  .delete(deleteOneProperty);

export default router;
