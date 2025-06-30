import React from "react";
import "./home.css";
import yes from "../../assets/images/yes.png";
import { Link } from "react-router-dom";
function Home() {
	const mainProjects = [
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
		<div className="home">
			{mainProjects.map((project, index) => {
				return (
					<div key={index} className="home-projects">
						<Link
							to={`/case-study/${project.projectName}`}
							state={project}
						>
							<div className="case-hover">
								<img
									src={project.headerImage}
									alt={`${project.projectName} preview`}
								/>
							</div>
						</Link>
						<h3>{project.projectName}</h3>
						<div className="home-projects-tags">
							{project.projectTags.map((tag, index) => {
								return (
									<p key={index} className="pill">
										{tag}
									</p>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Home;
