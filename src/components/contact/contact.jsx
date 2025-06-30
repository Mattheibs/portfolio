import "./contact.css";

function Contact() {
	return (
		<div className="contact">
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
