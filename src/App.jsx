import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/sideBar/sideBar";
import Home from "./components/home/home";
import About from "./components/about/about";
import CaseStudies from "./components/caseStudies/caseStudies";
import Contact from "./components/contact/contact";
import MoreInfo from "./components/moreInfo/moreInfo";
import CaseStudy from "./components/caseStudy/caseStudy";

function App() {
	return (
		<Router>
			<div className="App" id="layout">
				<SideBar />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route
							path="/case-studies"
							element={<CaseStudies />}
						/>
						<Route path="/more-info" element={<MoreInfo />} />
						<Route path="/contact" element={<Contact />} />
						<Route
							path="/case-study/:projectName"
							element={<CaseStudy />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
