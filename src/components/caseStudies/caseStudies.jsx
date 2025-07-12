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
		{
			name: "Finpulse",
			languagesUsed: ["HTML", "CSS", "JavaScript"],
			displayImage: "wanderly-display-img.webp",
			slug: "finpulse",
		},
	];
	return (
		<div className="case-studies">
			<Helmet>
				<title>
					Case Studies | Matthew's Frontend Developer Portfolio
				</title>
				<meta
					name="description"
					content="Explore detailed case studies of web applications built by Matthew Heiberg, a frontend developer skilled in JavaScript, React, HTMX, HTML, CSS, Pug, and Node.js. Dive into real-world projects showcasing performance, scalability, and clean modern code."
				/>
				<meta
					property="og:title"
					content="Case Studies | Matthew's Frontend Developer Portfolio"
				/>
				<meta
					property="og:description"
					content="Explore detailed case studies of web applications built by Matthew Heiberg, a frontend developer skilled in JavaScript, React, HTMX, HTML, CSS, Pug, and Node.js. Dive into real-world projects showcasing performance, scalability, and clean modern code"
				/>
				<meta
					property="og:image"
					content="https://example.com/og-image.jpg"
				/>
				<meta property="og:url" content="https://example.com" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Case Studies | Matthew's Frontend Developer Portfolio"
				/>
				<meta
					name="twitter:description"
					content="Explore detailed case studies of web applications built by Matthew Heiberg, a frontend developer skilled in JavaScript, React, HTMX, HTML, CSS, Pug, and Node.js. Dive into real-world projects showcasing performance, scalability, and clean modern code"
				/>
				<meta
					name="twitter:image"
					content="https://example.com/twitter-image.jpg"
				/>
			</Helmet>
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
						<Link to={`/case-study/${caseStudy.slug}`}>
							<div className="case-hover">
								<img
									src={caseStudy.displayImage}
									alt={`${caseStudy.name} preview`}
								/>
							</div>
						</Link>
						<h3>{caseStudy.name}</h3>
						<div className="case-study-projects-tags">
							{caseStudy.languagesUsed.map(
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
