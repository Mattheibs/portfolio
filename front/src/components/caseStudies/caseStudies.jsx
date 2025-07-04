import "./caseStudies.css";
import yes from "../../assets/images/yes.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function CaseStudies() {
	const caseStudies = [
		{
			headerImage: yes,
			imageCollection: [yes, yes, yes],
			fullImage: yes,
			projectName: "Finpulse",
			projectTags: ["HTML", "CSS", "JavaScript"],
			projectLink: "/case-study/finpulse",
			introduction:
				"I recently completed building a responsive and interactive website using HTML, CSS, and JavaScript. The goal of the project was to create a user-friendly and visually appealing platform that could effectively communicate information and provide a seamless browsing experience. This project not only allowed me to showcase my front-end development skills but also provided an opportunity to experiment with modern web design techniques.",
			approach: [
				"The development process began with thorough planning, where I outlined the structure of the website and defined the key features and user interactions. Using HTML, I created the foundation and structure of the website, ensuring semantic markup for accessibility and SEO optimization. For the styling, I employed CSS to design a clean and professional layout, incorporating responsive design principles to make the website functional across different screen sizes and devices.",
				"To enhance interactivity, I utilized JavaScript to implement dynamic elements, such as interactive menus, form validation, and animations. I focused on optimizing performance by ensuring efficient use of resources and keeping the code modular and maintainable. Throughout the project, I followed best practices in web development, including code validation and testing across multiple browsers.",
			],
			outcome: "The result is a fully functional, responsive website that meets modern design and usability standards. The site features a polished user interface, smooth navigation, and interactive elements that enhance the overall user experience. By using HTML, CSS, and JavaScript effectively, I created a platform that not only fulfills its intended purpose but also demonstrates my technical expertise and creativity in web development.",
			siteLink: "",
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
					<Link
						to={`${caseStudy.projectLink}`}
						state={caseStudy}
					>
						<div className="case-hover">
							<img
								src={caseStudy.headerImage}
								alt={`${caseStudy.projectName} preview`}
							/>
						</div>
					</Link>
					<h3>{caseStudy.projectName}</h3>
					<div className="case-study-projects-tags">
						{caseStudy.projectTags.map((tag, tagIndex) => (
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
						<Link
							to={`/case-study/${caseStudy.projectName}`}
							state={caseStudy}
						>
							<div className="case-hover">
								<img
									src={caseStudy.headerImage}
									alt={`${caseStudy.projectName} preview`}
								/>
							</div>
						</Link>
						<h3>{caseStudy.projectName}</h3>
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
