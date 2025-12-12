import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Region } from '../common/types/region.enum';
import { faLocationDot, faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
	const navigate = useNavigate();
	const regions = Object.values(Region);

	return (
		<>
			<header className='flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 justify-between items-center py-5 px-12'>
				<img src='/images/logo.png' alt='' className='w-80' />

				<div className='flex gap-x-4'>
					<button
						className='bg-primary hover:bg-blue-900 transition ease-in-out text-white font-semibold py-2 px-4 rounded-lg cursor-pointer'
						onClick={() => navigate('/trip-plan')}
					>
						<Link to='/trip-plan'>
							<FontAwesomeIcon icon={faPlaneUp} /> &nbsp; Trip Plan
						</Link>
					</button>

					<button
						className='bg-primary hover:bg-blue-900 transition ease-in-out text-white font-semibold py-2 px-4 rounded-lg cursor-pointer'
						onClick={() => navigate('/planned-trips')}
					>
						<Link to='/trip-plan'>
							<FontAwesomeIcon icon={faLocationDot} /> &nbsp; Planned Trips
						</Link>
					</button>
				</div>
			</header>

			<nav className='text-base md:text-xl bg-primary p-5 mb-5 text-white font-bold sticky top-0 z-50 shadow-xl'>
				<ul className='flex flex-row justify-evenly'>
					<li>
						<NavLink
							to='/'
							onClick={() => window.scroll(0, 0)}
							className={({ isActive }) => {
								if (isActive) {
									return 'border-b-4 border-white rounded-sm cursor-pointer';
								}

								return 'cursor-pointer hover:scale-110';
							}}
						>
							Home
						</NavLink>
					</li>

					{regions.map((region) => (
						<li key={region} onClick={() => window.scroll(0, 0)}>
							<NavLink
								to={`/region/${region}`}
								className={({ isActive }) => {
									if (isActive) {
										return 'border-b-4 border-white rounded-sm cursor-pointer';
									}

									return 'cursor-pointer hover:scale-110';
								}}
							>
								{region}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}
