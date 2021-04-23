const express = require("express");
const router = express.Router();
const auth = require("../auth");
const accountController = require("../controllers/accountController");



router.post("/create_accounts", accountController.createAccount);
router.post("/create_task", accountController.createTask);
router.get("/read_account", auth.checking, accountController.readAccount);
router.post("/update_account", accountController.updateAccount);
router.post("/update_task", accountController.updateTask);
router.post("/delete_account", accountController.deleteAccount);
router.post("/delete_task", accountController.deleteTask);

module.exports = router;
