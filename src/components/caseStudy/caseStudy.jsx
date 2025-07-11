import "./caseStudy.css";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
				"I recently completed building a responsive and interactive website using HTML, CSS, and JavaScript. The goal of the project was to create a user-friendly and visually appealing platform that could effectively communicate information and provide a seamless browsing experience. This project not only allowed me to showcase my front-end development skills but also provided an opportunity to experiment with modern web design techniques.",
			],
			projectApproach: [
				"The development process began with thorough planning, where I outlined the structure of the website and defined the key features and user interactions. Using HTML, I created the foundation and structure of the website, ensuring semantic markup for accessibility and SEO optimization. For the styling, I employed CSS to design a clean and professional layout, incorporating responsive design principles to make the website functional across different screen sizes and devices.",
				"To enhance interactivity, I utilized JavaScript to implement dynamic elements, such as interactive menus, form validation, and animations. I focused on optimizing performance by ensuring efficient use of resources and keeping the code modular and maintainable. Throughout the project, I followed best practices in web development, including code validation and testing across multiple browsers.",
			],
			projectOutcome: [
				"The result is a fully functional, responsive website that meets modern design and usability standards. The site features a polished user interface, smooth navigation, and interactive elements that enhance the overall user experience. By using HTML, CSS, and JavaScript effectively, I created a platform that not only fulfills its intended purpose but also demonstrates my technical expertise and creativity in web development.",
			],
			displayImage: "wanderly-display-img.webp",
			largeDisplayImage: "wanderly-large-display.webp",
			languagesUsed: ["HTML", "CSS", "JavaScript"],
			projectUrl: "https://www.google.com",
			metaDescription:
				"Finpulse is a responsive, interactive website developed using HTML, CSS, and JavaScript. This case study showcases my frontend development process, from planning to implementation, with a focus on performance, accessibility, and user experience.",
			slug: "wanderly",
		},
	];

	const study = data.find((cs) => cs.slug === slug);

	return (
		<div className="case-study">
			<Helmet>
				{study ? (
					<title>
						{study.name} Case Study | Matthew's Frontend
						Developer Portfolio
					</title>
				) : (
					<title>
						Matthew Heiberg | Frontend Developer Portfolio
					</title>
				)}

				<meta
					name="description"
					content="Frontend Developer skilled in JavaScript, React, HTMX, HTML, CSS, Pug, and Node.js. I build fast, interactive, and scalable web applications with clean, modern code. Explore my portfolio to see my latest projects."
				/>
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
							src={`/src/assets/images/${study.slug}/${study.displayImage}`}
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
										key={index}
										src={`/src/assets/images/${study.slug}/${image}`}
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
								src={`/src/assets/images/${study.slug}/${study.largeDisplayImage}`}
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
				</>
			) : (
				<p>Nothing</p>
			)}
		</div>
	);
}

export default CaseStudy;
