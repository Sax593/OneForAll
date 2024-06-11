const express = require("express");

const router = express.Router();

const userControllers = require("./controller/UserControllers");
const sessionControllers = require("./controller/SessionControllers");

router.get("/users", userControllers.getUsers);
router.get("/user/:id", userControllers.getUserById);
router.post("/user", userControllers.createUser);
router.put("/user/:id", userControllers.updateUser);
router.delete("/user/:id", userControllers.deleteUser);

router.get("/sessions", sessionControllers.getSessions);
router.get("/session/:id", sessionControllers.getSessionById);
router.post("/session", sessionControllers.createSession);
router.put("/session/:id", sessionControllers.updateSession);
router.delete("/session/:id", sessionControllers.deleteSession);

module.exports = router;
