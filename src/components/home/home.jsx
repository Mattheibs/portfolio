import "./home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
	const data = [
		{
			name: "Wanderly",
			languagesUsed: ["HTML", "CSS", "JavaScript"],
			displayImage: "wanderly-display-img.webp",
			slug: "wanderly",
		},
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
				<meta property="og:url" content="https://example.com" />
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
							"url": "here",
							"jobTitle": "Frontend Developer",
							"sameAs": [
								"here",
								"here"
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
								"item": "here-url"
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
