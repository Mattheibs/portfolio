const Project = require("../models/projectModel");

exports.createProject = async (req, res, next) => {
	try {
		const project = await Project.create(req.body);
		res.status(200).json({
			status: "success",
			data: project,
		});
	} catch (err) {
		if (err.name === "ValidationError") {
			res.status(400).json({
				status: "error creating project",
				message: err.message,
			});
		} else {
			res.status(500).json({
				status: "error creating project",
				message: err,
			});
		}
	}
};

exports.getAllProjects = async (req, res, next) => {
	try {
		const project = await Project.find();
		res.status(200).json({
			status: "success",
			data: project,
		});
	} catch (err) {
		res.status(400).json({
			status: "error",
			message: "Error fetching project, please try again later",
		});
	}
};

exports.updateProject = async (req, res, next) => {
	try {
		const project = await Project.findOneAndUpdate(
			{ slug: req.params.slug },
			req.body,
			{
				new: true,
				runValidators: true,
			}
		);
		res.status(200).json({
			status: "success",
			data: project,
		});
	} catch (err) {
		res.status(400).json({
			status: "error",
			message: "Could not update project, please try again later",
		});
	}
};

exports.getProject = async (req, res, next) => {
	const project = await Project.findOne({ slug: req.params.slug }).populate(
		"guides"
	);

	if (!project) {
		res.status(400).json({
			status: "error",
			message: "No project with that name",
		});
		next();
	}
	res.status(200).json({
		status: "success",
		data: project,
	});
};

exports.deleteProject = async (req, res, next) => {
	const project = await Project.findOneAndDelete({ slug: req.params.slug });

	if (!project) {
		res.status(400).json({
			status: "error",
			message: "No project with that name",
		});
		next();
	}
	res.status(200).json({
		status: "success",
		data: project,
	});
};
