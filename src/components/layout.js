import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import Projects from "./projects";
import Section from "./section";
import Hero from "../components/hero";

function Layout({ children }) {
	return (
		<div className='flex flex-col min-h-screen font-sans text-gray-900'>
			<Header />
			<Hero />

			{/* <main className='flex-1 w-full max-w-6xl px-4 pb-4 mx-auto md:px-8 md:pb-4'> */}
			<main className=''>
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
