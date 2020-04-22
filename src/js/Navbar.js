import React from "react";
import kuoterLogo from "./kuoterLogo.png";

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
			<div className="container">
				<a href="#" className="navbar-brand">
					<img
						src={kuoterLogo}
						width="75"
						alt=""
						className="d-inline-block align-middle mr-3"
					/>
					<span className="font-weight-bold">
						LMV Web Solutions Inc.
					</span>
				</a>

				<button
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					className="navbar-toggler">
					<span className="navbar-toggler-icon" />
				</button>

				<div
					id="navbarSupportedContent"
					className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a href="#" className="nav-link">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								About
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
