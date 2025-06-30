import "./caseStudy.css";
import { useLocation, Link } from "react-router-dom";

function CaseStudy() {
	const location = useLocation();
	const caseStudy = location.state;

	// Handle the case where state is missing
	if (!caseStudy) {
		return <div>Case study data not available.</div>;
	}

	return (
		<div className="case-study">
			<div className="case-study-nav">
				<Link to="/case-studies">Case Studies</Link>
				<span>&gt;</span>
				<p>{caseStudy.projectName}</p>
			</div>
			<div className="case-hover">
				<img
					src={caseStudy.headerImage}
					alt={`${caseStudy.projectName} preview`}
				/>
			</div>
			<section className="case-study-content-header">
				<h3>{caseStudy.projectName}</h3>
				<div className="case-study-content-header-link">
					<div className="case-study-pills">
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
					<div className="case-study-content-header-link-view">
						<h3>View Website</h3>
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
				<p className="case-study-description">
					{caseStudy.introduction}
				</p>
				<div className="case-study-image-collection">
					{caseStudy.imageCollection.length > 1 &&
						caseStudy.imageCollection.map((image, index) => (
							<img
								key={index}
								src={image}
								alt={`${caseStudy.projectName} preview`}
							></img>
						))}
				</div>
				<h3>Approach</h3>
				{caseStudy.approach.length > 1 &&
					caseStudy.approach.map((item, index) => (
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
						src={caseStudy.fullImage}
						alt={`${caseStudy.projectName} preview`}
					></img>
				</div>
				<h3>Outcome</h3>
				<p className="case-study-description">
					{caseStudy.outcome}
				</p>
			</section>
			<h3 className="view-website">
				View Website
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
			</h3>
		</div>
	);
}

export default CaseStudy;
