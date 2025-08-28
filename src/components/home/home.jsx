import "./home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
	const data = [
		{
			name: "Finpulse",
			languagesUsed: ["HTML", "CSS", "JavaScript"],
			displayImage: "finpulse-display-img.webp",
			slug: "finpulse",
		},
	];
	return (
		<div className="home">
			<Helmet>
				<title>
					Matthew Heiberg | Frontend Developer Portfolio
				</title>
				<link rel="canonical" href="https://mattheibs.github.io/portfolio" />,
				<meta
					name="description"
					content="Frontend Developer skilled in JavaScript, React, HTMX, HTML, CSS, Pug, and Node.js. I build fast, interactive, and scalable web applications with clean, modern code. Explore my portfolio to see my latest projects."
				/>
				<meta
					property="og:title"
					content="Matthew Heiberg | Frontend Developer Portfolio"
				/>
				<meta
					property="og:description"
					content="Frontend Developer skilled in JavaScript, React, HTMX, HTML, CSS, Pug, and Node.js. I build fast, interactive, and scalable web applications with clean, modern code. Explore my portfolio to see my latest projects."
				/>
				<meta
					property="og:image"
					content="https://example.com/og-image.jpg"
				/>
				<meta
					property="og:url"
					content="https://mattheibs.github.io/portfolio"
				/>
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Matthew Heiberg | Frontend Developer Portfolio"
				/>
				<meta
					name="twitter:description"
					content="Frontend Developer skilled in JavaScript, React, HTMX, HTML, CSS, Pug, and Node.js. I build fast, interactive, and scalable web applications with clean, modern code. Explore my portfolio to see my latest projects."
				/>
				<meta
					name="twitter:image"
					content="https://example.com/twitter-image.jpg"
				/>
				<script type="application/ld+json">
					{`
						{
							"@context": "https://schema.org",
							"@type": "Person",
							"name": "Matthew Heiberg",
							"url": "https://mattheibs.github.io/portfolio",
							"jobTitle": "Frontend Developer",
							"sameAs": [
								"https://www.linkedin.com/in/matthew-heiberg-265071159/",
								"https://github.com/Mattheibs"
							]
						}
					`}
				</script>
				<script type="application/ld+json">
					{`
						{
							"@context": "https://schema.org",
							"@type": "BreadcrumbList",
							"itemListElement": [
								{
								"@type": "ListItem",
								"position": 1,
								"name": "Home",
								"item": "https://mattheibs.github.io/portfolio"
								}
							]
						}
					`}
				</script>
			</Helmet>
			{data.length > 0 ? (
				data.map((project, index) => {
					return (
						<div key={index} className="home-projects">
							<Link
								to={`/case-study/${project.slug}`}
								state={project}
							>
								<div className="case-hover">
									<img
										src={`/images/${project.slug}/${project.displayImage}`}
										alt={`${project.name} preview`}
									/>
								</div>
							</Link>
							<h3>{project.name}</h3>
							<div className="home-projects-tags">
								{project.languagesUsed.map(
									(tag, index) => {
										return (
											<p
												key={index}
												className="pill"
											>
												{tag}
											</p>
										);
									}
								)}
							</div>
						</div>
					);
				})
			) : (
				<p>No projects found.</p>
			)}
		</div>
	);
}

export default Home;
