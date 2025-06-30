const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const projectRoutes = require("./routes/projectRoutes");
const session = require("express-session");
const cors = require("cors");

const app = express();

const corsOptions = {
	origin: "http://localhost:5173", // Allow requests only from your Vite app
	credentials: true, // Include cookies in requests
	methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
	allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
};

app.use(cors(corsOptions));

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 86400000,
			httpOnly: true,
			secure: false,
			//secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
		},
	})
);

// Parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Parse JSON bodies (for API requests)
app.use(express.json({ limit: "10kb" }));
// Rate limiting
// const limiter = rateLimit({
// 	max: 100,
// 	windowMs: 60 * 60 * 1000,
// 	message: "Too many requests",
// });

// app.use(limiter);

// Security headers
app.use(helmet());

// Prevent NoSQL injection
app.use((req, res, next) => {
	if (req.body) {
		req.body = mongoSanitize.sanitize(req.body);
	}
	next();
});

// Prevent HTTP parameter pollution
app.use(hpp());

// Sanitize user inputs
app.use((req, res, next) => {
	if (req.body) {
		for (const key in req.body) {
			if (Object.prototype.hasOwnProperty.call(req.body, key)) {
				const value = req.body[key];

				if (typeof value === "string") {
					req.body[key] = xss(value);
				} else if (Array.isArray(value)) {
					req.body[key] = value.map((item) =>
						typeof item === "string" ? xss(item) : item
					);
				}
				// You could also handle nested objects here if needed
			}
		}
	}
	next();
});

// Serve static files
app.use("/public", express.static("public"));

app.use("/flatpickr", express.static(__dirname + "/node_modules/flatpickr"));

// Routes
app.use("/api/projects", projectRoutes);

app.use((req, res) => {
	res.status(404).json({
		status: "not found",
	});
});

// Export app
module.exports = app;
