import "./contact.css";
import { Helmet } from "react-helmet";

function Contact() {
	return (
		<div className="contact">
			<Helmet>
				<title>
					Contact Me | Matthew's Frontend Developer Portfolio
				</title>
				<meta
					name="description"
					content="Get in touch with Matthew Heiberg for frontend development projects, collaborations, or freelance opportunities. Let's build something great together!"
				/>
				<meta
					property="og:title"
					content="Contact Me | Matthew's Frontend Developer Portfolio"
				/>
				<meta
					property="og:description"
					content="Get in touch with Matthew Heiberg for frontend development projects, collaborations, or freelance opportunities. Let's build something great together!"
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
					content="Contact Me | Matthew's Frontend Developer Portfolio"
				/>
				<meta
					name="twitter:description"
					content="Get in touch with Matthew Heiberg for frontend development projects, collaborations, or freelance opportunities. Let's build something great together!"
				/>
				<meta
					name="twitter:image"
					content="https://example.com/twitter-image.jpg"
				/>
				<script type="application/ld+json">
					{`{
						"@context": "https://schema.org",
						"@type": "ContactPage",
						"name": "Contact Me",
						"mainEntity": {
							"@type": "Person",
							"name": "Matthew Heiberg",
							"email": "mailto:mattheibs@gmail.com",
							"url": "here"
						}
						}
					`}
				</script>
			</Helmet>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="mailto:mattheibs@gmail.com"
			>
				Email
			</a>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.linkedin.com/in/matthew-heiberg-265071159/"
			>
				LinkedIn
			</a>
			{/* <a target="_blank" rel="noopener noreferrer" href="">
				Resume
			</a> */}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/Mattheibs"
			>
				Github
			</a>
		</div>
	);
}

export default Contact;
