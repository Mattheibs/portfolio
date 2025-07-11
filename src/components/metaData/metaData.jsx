import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routeMetadata from "../metadata";
const caseStudies = [
	{
		projectName: "Finpulse",
		projectTags: ["HTML", "CSS", "JavaScript"],
		projectLink: "/case-study/finpulse",
		description:
			"A responsive, interactive website showcasing HTML, CSS, and JavaScript skills for a seamless and user-friendly browsing experience.",
	},
];
function Metadata() {
	const location = useLocation();

	useEffect(() => {
		let metadata;

		// Extract the projectName from the URL
		const pathParts = location.pathname.split("/");
		const projectName = pathParts[pathParts.length - 1]; // Last part of the path

		if (location.pathname.startsWith("/case-study/")) {
			// Find the case study matching the projectName
			const caseStudy = caseStudies.find(
				(cs) =>
					cs.projectName.toLowerCase() ===
					projectName.toLowerCase()
			);

			// Set metadata based on the case study, or default values
			metadata = caseStudy
				? {
						title: `${caseStudy.projectName} Case Study - Matthew's Portfolio`,
						description: caseStudy.description,
						keywords: `case study, ${
							caseStudy.projectName
						}, ${caseStudy.projectTags.join(", ")}`,
				  }
				: {
						title: "Case Study Not Found - Matthew's Portfolio",
						description:
							"The requested case study could not be found.",
						keywords: "case study, not found",
				  };
		} else {
			// Fallback to static metadata for non-dynamic routes
			const { pathname } = location;
			metadata = routeMetadata[pathname] || {
				title: "My React App",
				description:
					"Default description for my React application.",
				keywords: "default, react app, metadata",
			};
		}

		// Update the document title
		document.title = metadata.title;

		// Update the meta description
		const metaDescription = document.querySelector(
			'meta[name="description"]'
		);
		if (metaDescription) {
			metaDescription.setAttribute("content", metadata.description);
		} else {
			const newMetaDescription = document.createElement("meta");
			newMetaDescription.setAttribute("name", "description");
			newMetaDescription.setAttribute("content", metadata.description);
			document.head.appendChild(newMetaDescription);
		}

		// Update the meta keywords
		const metaKeywords = document.querySelector('meta[name="keywords"]');
		if (metaKeywords) {
			metaKeywords.setAttribute("content", metadata.keywords);
		} else {
			const newMetaKeywords = document.createElement("meta");
			newMetaKeywords.setAttribute("name", "keywords");
			newMetaKeywords.setAttribute("content", metadata.keywords);
			document.head.appendChild(newMetaKeywords);
		}
	}, [location]);

	return null; // This component only updates metadata, it doesn't render anything
}

export default Metadata;
