import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className='pt-12 bottom-0'>
			<div className='flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 justify-between items-center p-4 px-12 bg-primary text-white'>
				<div className='flex justify-center items-center'>
					<h1 className='text-lg font-semibold'>Trip Planner 2024</h1>
				</div>

				<ul className='flex flex-col lg:flex-row justify-center items-center gap-x-4 gap-y-4 lg:gap-y-0 text-md font-semibold'>
					<li onClick={() => window.scroll(0, 0)}>
						<Link to='/'>Home</Link>
					</li>

					<li onClick={() => window.scroll(0, 0)}>
						<Link to='/trip-plan'>Trip Plan</Link>
					</li>

					<li onClick={() => window.scroll(0, 0)}>
						<Link to='/planned-trips'>Planned Trips</Link>
					</li>
				</ul>

				<p className='text-md font-semibold'>Bojan Ugrinov</p>
			</div>
		</footer>
	);
}
