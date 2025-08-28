import gaming from "/images/gaming.webp";
import bouldering from "/images/bouldering.webp";
import gamingMobile from "/images/gaming-mobile.webp";
import boulderingMobile from "/images/bouldering-mobile.webp";
import "./moreInfo.css";
import { Helmet } from "react-helmet-async";

function MoreInfo() {
	return (
		<div className="more-info">
			<Helmet>
				<title>
					More Info | Matthew's Frontend Developer Portfolio
				</title>
				<link
					rel="canonical"
					href="https://mattheibs.github.io/portfolio/more-info"
				/>
				<meta
					name="description"
					content="Learn more about Matthew Heiberg beyond code. Discover how passions like gaming and bouldering fuel his creativity, problem-solving, and focus as a frontend developer. A glimpse into the person behind the projects."
				/>
				<meta
					property="og:title"
					content="More Info | Matthew's Frontend Developer Portfolio"
				/>
				<meta
					property="og:description"
					content="Learn more about Matthew Heiberg beyond code. Discover how passions like gaming and bouldering fuel his creativity, problem-solving, and focus as a frontend developer. A glimpse into the person behind the projects."
				/>
				<meta
					property="og:image"
					content="https://example.com/og-image.jpg"
				/>
				<meta
					property="og:url"
					content="https://mattheibs.github.io/portfolio/more-info"
				/>
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="More Info | Matthew's Frontend Developer Portfolio"
				/>
				<meta
					name="twitter:description"
					content="Learn more about Matthew Heiberg beyond code. Discover how passions like gaming and bouldering fuel his creativity, problem-solving, and focus as a frontend developer. A glimpse into the person behind the projects."
				/>
				<meta
					name="twitter:image"
					content="https://example.com/twitter-image.jpg"
				/>
				<script type="application/ld+json">
					{`{
						"@context": "https://schema.org",
						"@type": "AboutPage",
						"name": "More Info",
						"mainEntity": {
							"@type": "Person",
							"name": "Matthew Heiberg",
							"jobTitle": "Frontend Developer",
							"description": "Learn more about Matthew Heiberg beyond code. Discover how passions like gaming and bouldering fuel his creativity, problem-solving, and focus as a frontend developer. A glimpse into the person behind the projects."
						}
					`}
				</script>
			</Helmet>
			<div className="more-info-grid-item">
				<h2>Gaming</h2>
				<p>
					Gaming is one of my favorite hobbies and a way to
					unwind after a long day. It allows me to immerse myself
					in exciting adventures, test my strategic thinking, and
					connect with friends in multiplayer experiences.
				</p>
				<p>
					It’s not just about entertainment but also about honing
					skills like problem-solving, hand-eye coordination, and
					teamwork. Whether it's exploring open worlds,
					completing quests, or competing in fast-paced matches,
					gaming is an integral part of how I relax and recharge.
				</p>
			</div>
			<picture>
				<source srcSet={gamingMobile} media="(max-width: 768px)" />
				<img
					width="500"
					height="370"
					src={gaming}
					alt="Somone gaming"
				/>
			</picture>
			<picture>
				<source
					srcSet={boulderingMobile}
					media="(max-width: 768px)"
				/>
				<img
					width="500"
					height="370"
					src={bouldering}
					alt="Bouldering wall"
				/>
			</picture>
			<div className="more-info-grid-item">
				<h2>Bouldering</h2>
				<p>
					Bouldering is one of my favorite hobbies and a perfect
					way to challenge myself physically and mentally. It
					combines strength, strategy, and problem-solving as I
					tackle routes of varying difficulty on the climbing
					wall.
				</p>
				<p>
					I love how bouldering pushes me to focus on technique,
					balance, and persistence. It’s not just a workout but
					also a meditative experience, where each climb is a
					puzzle waiting to be solved. Whether I’m climbing alone
					or with friends, it’s an activity that keeps me
					energized and inspired.
				</p>
			</div>
		</div>
	);
}

export default MoreInfo;
