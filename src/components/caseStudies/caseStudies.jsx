import "./caseStudies.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function CaseStudies() {
	const caseStudies = [
		{
			name: "Wanderly",
			languagesUsed: ["HTML", "CSS", "JavaScript"],
			displayImage: "wanderly-display-img.webp",
			slug: "wanderly",
		},
	];
	return (
		<div className="case-studies">
			<title>
				Case Studies | Matthew's Frontend Developer Portfolio
			</title>
			<meta
				name="description"
				content="Explore a collection of detailed frontend development case studies showcasing my work with React, JavaScript, HTMX, Node.js, and more."
			/>
			<div className="case-studies-filter">
				<h3>Filter Categories:</h3>
				<div className="case-studies-filter-pills">
					<p className="pill">HTML</p>
					<p className="pill">CSS</p>
					<p className="pill">Django</p>
					<p className="pill">React</p>
					<p className="pill">Typescript</p>
				</div>
			</div>
			{caseStudies.slice(0, 1).map((caseStudy, index) => (
				<div key={index} className="case-study-projects">
					<Link to={`/case-study/${caseStudy.slug}`}>
						<div className="case-hover">
							<img
								src={`/src/assets/images/${caseStudy.slug}/${caseStudy.displayImage}`}
								alt={`${caseStudy.name} preview`}
							/>
						</div>
					</Link>
					<h3>{caseStudy.name}</h3>
					<div className="case-study-projects-tags">
						{caseStudy.languagesUsed.map((tag, tagIndex) => (
							<p key={tagIndex} className="pill">
								{tag}
							</p>
						))}
					</div>
				</div>
			))}
			<div className="case-study-projects-grid">
				{caseStudies.slice(1).map((caseStudy, index) => (
					<div key={index} className="case-study-projects">
						<Link to={`/case-study/${caseStudy.name}`}>
							<div className="case-hover">
								<img
									src={caseStudy.displayImage}
									alt={`${caseStudy.name} preview`}
								/>
							</div>
						</Link>
						<h3>{caseStudy.name}</h3>
						<div className="case-study-projects-tags">
							{caseStudy.projectTags.map(
								(tag, tagIndex) => (
									<p key={tagIndex} className="pill">
										{tag}
									</p>
								)
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default CaseStudies;
