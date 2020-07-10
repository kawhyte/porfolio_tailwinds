import React from "react";
// import photo from "../images/bubble.png";
import humanInSpaceIllustration from "../images//flame-759.png";
import gameIllustration from "../images//flame-759.png";
import codeIllustration from "../images//flame-759.png";

function Section() {
	return (
		<div className="bg-green-100"> 
		<section className='max-w-6xl mx-auto mb-12'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
				<section className='m-4 rounded-lg border bg-white'>
					<p className='m-5 text-center text-2xl font-k uppercase bg-orange-100 p-1'>Software Engineer </p>
					<div>
						<img
							alt='Cat and human sitting on a couch'
							className='block mx-auto mb-4   w-40 h-40'
							src={codeIllustration}
						/>
					</div>
					<div className='p-5 break-words'>
					Currently, I&apos;m focused on developing web applications with C#, .NET Core, Node.js, and React/Gatsby. 
					</div>
				</section>
				<section className='m-4 rounded-lg border bg-white'>
					<p className='m-5 text-center text-2xl font-k uppercase bg-orange-100 p-1'>Observational Astronomer</p>
					<div>
						<img
							alt='Cat and human sitting on a couch'
							className='block mx-auto mb-4   w-40 h-40'
							src={humanInSpaceIllustration}
						/>
					</div>
					<div className='p-5 break-words'>
					<span > I&apos;m a Software Developer by day and an amateur astronomer by night.</span>
					<span  className="italic text-gray-700"> &quot;The good thing about science is that it&apos;s true whether or not you believe in it&quot;. ~ Neil deGrasse Tyson</span> 
					</div>
				</section>
				<section className='m-4 rounded-lg border bg-white'>
					<p className='m-5 text-center text-2xl font-k uppercase bg-orange-100 p-1'>
					Nintendo Enthusiast	
					</p>
					<div>
						<img
							alt='Cat and human sitting on a couch'
							className='block mx-auto mb-4   w-40 h-40'
							src={gameIllustration}
						/>
					</div>
					<div className='p-5 break-words'>
				
				Games with Mario, Zelda or Metriod... Nintendo all the way! ✌🏽🎮
					</div>
				</section>
			</div>
		</section>
		</div>
	);
}

export default Section;
