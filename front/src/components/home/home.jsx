import axios from "axios";
import "./home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		console.log("hit");
		axios.get("http://localhost:3000/api/projects")
			.then((response) => {
				setData(response.data || []);
				setLoading(false);
				console.log(response.data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
				setError(true);
			});
	}, []);
	if (loading) {
		return <div className="home">Loading...</div>;
	}

	if (error) {
		return <div className="home">{error}</div>;
	}

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
										src={project.displayImage}
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
