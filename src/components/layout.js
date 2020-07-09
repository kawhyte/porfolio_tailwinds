import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";
import Projects from "./projects";
import Section from "./section";

function Layout({ children }) {
	return (
		<div className='flex flex-col min-h-screen font-sans text-gray-900'>
			<Header />

			<main className='flex-1 w-full max-w-6xl px-4 py-4 mx-auto md:px-8 md:py-4'>
				{children}
			</main>
			<Section />
			<Projects />

			<Footer />
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
