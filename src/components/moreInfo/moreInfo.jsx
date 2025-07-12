import gaming from "../../assets/images/gaming.webp";
import bouldering from "../../assets/images/bouldering.webp";
import "./moreInfo.css";
import { Helmet } from "react-helmet";

function MoreInfo() {
	return (
		<div className="more-info">
			<Helmet>
				<title>
					More Info | Matthew's Frontend Developer Portfolio
				</title>
				<meta
					name="description"
					content="Learn more about Matthew Heiberg beyond code. Discover how passions like gaming and bouldering fuel his creativity, problem-solving, and focus as a frontend developer. A glimpse into the person behind the projects."
				/>
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
			<img src={gaming} alt="Person gaming" />
			<img src={bouldering} alt="Person climbing" />
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
