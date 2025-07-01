// Importing mongoose module
const mongoose = require("mongoose");
const slugify = require("slugify");

// Calling Schema class
const Schema = mongoose.Schema;

// Creating Structure of the collection
const projectSchema = new Schema({
	name: {
		type: String,
		required: [true, "A project has to have a name"],
		unique: true,
	},
	gridImages: [String],
	projectIntroduction: [String],
	projectApproach: [String],
	projectOutcome: [String],
	displayImage: String,
	largeDisplayImage: String,
	languagesUsed: [String],
	projectUrl: String,
	slug: String,
});
projectSchema.pre("save", function (next) {
	this.slug = slugify(this.name).toLowerCase();
	return next();
});
// Creating collection
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
