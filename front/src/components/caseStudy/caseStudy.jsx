import axios from "axios";
import "./caseStudy.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

function CaseStudy() {
	const [data, setData] = useState([]);
	const { slug } = useParams();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		console.log("hit");
		axios.get(`http://localhost:3000/api/projects/${slug}`)
			.then((response) => {
				setData(response.data || []);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
				setError(true);
			});
	}, [slug]);
	if (loading) {
		return <div className="home">Loading...</div>;
	}

	if (error) {
		return <div className="home">{error}</div>;
	}

	return (
		<div className="case-study">
			<Helmet>
				{data ? (
					<title>
						{data.name} Case Study | Matthew's Frontend
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
			{data ? (
				<>
					<div className="case-study-nav">
						<Link to="/case-studies">Case Studies</Link>
						<span>&gt;</span>
						<p>{data.name}</p>
					</div>
					<div className="case-hover">
						<img
							src={`/${data.displayImage}`}
							alt={`${data.name} preview`}
						/>
					</div>
					<section className="case-study-content-header">
						<h3>{data.name}</h3>
						<div className="case-study-content-header-link">
							<div className="case-study-pills">
								<div className="case-study-projects-tags">
									{data.languagesUsed.map(
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
									href={data.projectUrl}
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
						{data.projectIntroduction.length > 0 &&
							data.projectIntroduction.map(
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
							{data.gridImages.length > 1 &&
								data.gridImages.map((image, index) => (
									<img
										key={index}
										src={`/${image}`}
										alt={`${data.name} preview`}
									></img>
								))}
						</div>
						<h3>Approach</h3>
						{data.projectApproach.length > 0 &&
							data.projectApproach.map((item, index) => (
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
								src={`/${data.largeDisplayImage}`}
								alt={`${data.name} preview`}
							></img>
						</div>
						<h3>Outcome</h3>
						{data.projectOutcome.length > 0 &&
							data.projectOutcome.map((item, index) => (
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
							href={data.projectUrl}
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
