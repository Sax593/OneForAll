const express = require("express");

const router = express.Router();

const userControllers = require("./controller/UserControllers");

router.get("/users", userControllers.getUsers);
router.get("/user/:id", userControllers.getUserById);
router.post("/user", userControllers.createUser);
router.put("/user", userControllers.updateUser);
router.delete("/user/:id", userControllers.deleteUser);

module.exports = router;
