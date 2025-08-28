import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const SideBar = lazy(() => import("./components/sideBar/sideBar"));
const Home = lazy(() => import("./components/home/home"));
const About = lazy(() => import("./components/about/about"));
const CaseStudies = lazy(() => import("./components/caseStudies/caseStudies"));
const Contact = lazy(() => import("./components/contact/contact"));
const MoreInfo = lazy(() => import("./components/moreInfo/moreInfo"));
const CaseStudy = lazy(() => import("./components/caseStudy/caseStudy"));
const NotFound = lazy(() => import("./components/notFound/notFound"));
import { HelmetProvider } from "react-helmet-async";

function App() {
	return (
		<HelmetProvider>
			<Router basename="/portfolio">
				<Suspense fallback={<div>Loading...</div>}>
					<div className="App" id="layout">
						<SideBar />
						<div className="content">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route
									path="/about"
									element={<About />}
								/>
								<Route
									path="/case-studies"
									element={<CaseStudies />}
								/>
								<Route
									path="/more-info"
									element={<MoreInfo />}
								/>
								<Route
									path="/contact"
									element={<Contact />}
								/>
								<Route
									path="/case-study/:slug"
									element={<CaseStudy />}
								/>
								<Route
									path="*"
									element={<NotFound />}
								/>
							</Routes>
						</div>
					</div>
				</Suspense>
			</Router>
		</HelmetProvider>
	);
}

export default App;
