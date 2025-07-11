import "./notFound.css";

function NotFound() {
	return (
		<div className="not-found">
			<h1>404</h1>
			<p>Page not found</p>
			<div>
				<p>The page you're looking for isn't here.</p>
				<a href="/">Return to homepage</a>
			</div>
		</div>
	);
}

export default NotFound;
