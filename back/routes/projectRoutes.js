const projectController = require("../controller/projectController");
const express = require("express");
const router = express.Router();

router
	.route("/")
	.post(projectController.createProject)
	.get(projectController.getAllProjects);

router
	.route("/:slug")
	.patch(projectController.updateProject)
	.get(projectController.getProject)
	.delete(projectController.deleteProject);

module.exports = router;
