import "./caseStudy.css";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function CaseStudy() {
	const { slug } = useParams();
	const data = [
		{
			name: "Wanderly",
			gridImages: [
				"wanderly-grid-1.webp",
				"wanderly-grid-2.webp",
				"wanderly-grid-3.webp",
			],
			projectIntroduction: [
				"I recently completed building a responsive and interactive web application using Vite and React. The goal of the project was to create a modern, user-friendly platform with an intuitive interface and smooth performance. This project allowed me to deepen my experience with React while leveraging Vite’s fast development environment and optimized build process to enhance both development efficiency and user experience.",
			],
			projectApproach: [
				"The development process began with careful planning and wireframing to define the application’s layout, core features, and user interactions. I used React to build a component-based architecture, which allowed for reusable, modular code and simplified state management. The structure of the application was organized for scalability, and attention was given to semantic HTML within React components to support accessibility and SEO.",
				"Using Vite as the build tool significantly improved development speed and performance. Its fast Hot Module Replacement (HMR) and optimized bundling allowed me to iterate quickly and deploy a lightweight, high-performance web app. Throughout the process, I adhered to modern best practices, including testing across various devices and browsers to ensure consistent functionality and responsiveness.",
			],
			projectOutcome: [
				"The final product is a responsive, high-performing React application that aligns with modern web development standards. It features a polished UI, seamless navigation, and dynamic interactions that contribute to an enjoyable user experience. By combining Vite’s speed and React’s flexibility, I delivered a professional-grade application that highlights both my front-end development skills and my ability to work with modern JavaScript frameworks and tooling",
			],
			displayImage: "wanderly-display-img.webp",
			closingImg: "wanderly-closing-img.webp",
			languagesUsed: ["HTML", "CSS", "JavaScript"],
			projectUrl: "https://www.google.com",
			metaDescription:
				"Wanderly is  a responsive React web app built with Vite, featuring fast performance, modern UI, and mobile-friendly design using best front-end development practices.",
			slug: "wanderly",
		},
		{
			name: "Finpulse",
			gridImages: [
				"finpulse-grid-1.webp",
				"finpulse-grid-2.webp",
				"finpulse-grid-3.webp",
			],
			projectIntroduction: [
				"I recently completed building a responsive and interactive website using HTML, CSS, and JavaScript. The goal of the project was to create a user-friendly and visually appealing platform that could effectively communicate information and provide a seamless browsing experience. This project not only allowed me to showcase my front-end development skills but also provided an opportunity to experiment with modern web design techniques.",
			],
			projectApproach: [
				"The development process began with thorough planning, where I outlined the structure of the website and defined the key features and user interactions. Using HTML, I created the foundation and structure of the website, ensuring semantic markup for accessibility and SEO optimization. For the styling, I employed CSS to design a clean and professional layout, incorporating responsive design principles to make the website functional across different screen sizes and devices.",
				"To enhance interactivity, I utilized JavaScript to implement dynamic elements, such as interactive menus, form validation, and animations. I focused on optimizing performance by ensuring efficient use of resources and keeping the code modular and maintainable. Throughout the project, I followed best practices in web development, including code validation and testing across multiple browsers.",
			],
			projectOutcome: [
				"The result is a fully functional, responsive website that meets modern design and usability standards. The site features a polished user interface, smooth navigation, and interactive elements that enhance the overall user experience. By using HTML, CSS, and JavaScript effectively, I created a platform that not only fulfills its intended purpose but also demonstrates my technical expertise and creativity in web development.",
			],
			displayImage: "finpulse-display-img.webp",
			closingImg: "finpulse-closing-img.webp",
			languagesUsed: ["HTML", "CSS", "JavaScript"],
			projectUrl: "https://www.google.com",
			metaDescription:
				"Finpulse is a responsive, interactive website developed using HTML, CSS, and JavaScript. This case study showcases my frontend development process, from planning to implementation, with a focus on performance, accessibility, and user experience.",
			slug: "finpulse",
		},
	];

	const study = data.find((cs) => cs.slug === slug);
	const breadcrumbJsonLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "here",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Case Studies",
				item: "here/case-studies",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: study.name,
				item: `here/case-study/${study.slug}`,
			},
		],
	};

	return (
		<div className="case-study">
			<Helmet>
				{study
					? [
							<title key="title">
								{study.name} Case Study | Matthew's
								Frontend Developer Portfolio
							</title>,
							<link rel="canonical" href="here/about" />,
							<meta
								key="meta"
								name="description"
								content={study.metaDescription}
							/>,
							<meta
								key="og-title"
								property="og:title"
								content={`${study.name} Case Study | Matthew's Frontend Developer Portfolio`}
							/>,
							<meta
								key="og-description"
								property="og:description"
								content={study.metaDescription}
							/>,
							<meta
								key="og-image"
								property="og:image"
								content="here"
							/>,
							<meta
								key="og-url"
								property="og:url"
								content="here"
							/>,
							<meta
								key="og-type"
								property="og:type"
								content="website"
							/>,
							<meta
								key="twitter-card-img"
								name="twitter:card"
								content="summary_large_image"
							/>,
							<meta
								key="twitter-title"
								name="twitter:title"
								content={`${study.name} Case Study | Matthew's Frontend Developer Portfolio`}
							/>,
							<meta
								key="twitter-description"
								name="twitter:description"
								content={study.metaDescription}
							/>,
							<meta
								key="twitter-img"
								name="twitter:image"
								content="here/twitter-image.jpg"
							/>,
							<script
								key="script-1"
								type="application/ld+json"
							>
								{`{
									"@context": "https://schema.org",
									"@type": "CreativeWork",
									"headline": ${study.name},
									"author": {
										"@type": "Person",
										name: "Matthew Heiberg",
									},
									"description":
										${study.metaDescription},
									"url": "here",
								}`}
							</script>,
							<script
								key="script-2"
								type="application/ld+json"
							>
								{JSON.stringify(breadcrumbJsonLd)}
							</script>,
					  ]
					: [
							<title>
								Matthew Heiberg | Frontend Developer
								Portfolio
							</title>,
							<link rel="canonical" href="here/about" />,
					  ]}
			</Helmet>
			{study ? (
				<>
					<div className="case-study-nav">
						<Link to="/case-studies">Case Studies</Link>
						<span>&gt;</span>
						<p>{study.name}</p>
					</div>
					<a
						href={study.projectUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="case-hover"
					>
						<img
							src={`/images/${study.slug}/${study.displayImage}`}
							alt={`${study.name} preview`}
						/>
					</a>
					<section className="case-study-content-header">
						<h3>{study.name}</h3>
						<div className="case-study-content-header-link">
							<div className="case-study-pills">
								<div className="case-study-projects-tags">
									{study.languagesUsed.map(
										(tag, tagIndex) => (
											<p
												key={tagIndex}
												className="pill"
											>
												{tag}
											</p>
										)
									)}
								</div>
							</div>
							<div className="case-study-content-header-link-view">
								<a
									href={study.projectUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									View Website
								</a>
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1.4235 13.1645L0 11.7646L9.76118 2.16455H1.01679V0.164551H13.2183V12.1645H11.1847V3.56455L1.4235 13.1645Z"
										fill="white"
									/>
								</svg>
							</div>
						</div>
					</section>
					<section className="case-study-content">
						<h3>Introduction</h3>
						{study.projectIntroduction.length > 0 &&
							study.projectIntroduction.map(
								(item, index) => (
									<p
										className="case-study-description"
										style={{
											marginTop: "20px",
										}}
										key={index}
									>
										{item}
									</p>
								)
							)}
						<div className="case-study-image-collection">
							{study.gridImages.length > 1 &&
								study.gridImages.map((image, index) => (
									<img
										loading="lazy"
										key={index}
										src={`/images/${study.slug}/${image}`}
										alt={`${study.name} preview`}
									></img>
								))}
						</div>
						<h3>Approach</h3>
						{study.projectApproach.length > 0 &&
							study.projectApproach.map((item, index) => (
								<p
									className="case-study-description"
									style={{ marginTop: "20px" }}
									key={index}
								>
									{item}
								</p>
							))}
						<div className="case-study-full-image">
							<img
								loading="lazy"
								src={`/images/${study.slug}/${study.closingImg}`}
								alt={`${study.name} preview`}
							></img>
						</div>
						<h3>Outcome</h3>
						{study.projectOutcome.length > 0 &&
							study.projectOutcome.map((item, index) => (
								<p
									className="case-study-description"
									style={{ marginTop: "20px" }}
									key={index}
								>
									{item}
								</p>
							))}
					</section>
					<div className="case-study-content-header-link-view case-study-content-header-link-view-bottom">
						<a
							href={study.projectUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							View Website
						</a>
						<svg
							width="14"
							height="14"
							viewBox="0 0 14 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.4235 13.1645L0 11.7646L9.76118 2.16455H1.01679V0.164551H13.2183V12.1645H11.1847V3.56455L1.4235 13.1645Z"
								fill="white"
							/>
						</svg>
					</div>
				</>
			) : (
				<p>Nothing</p>
			)}
		</div>
	);
}

export default CaseStudy;
