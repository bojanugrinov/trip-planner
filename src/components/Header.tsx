import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronDown,
	faChevronUp,
	faLocationDot,
	faPlaneUp,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Region } from '../common/types/region.enum';

export default function Header() {
	const [showRegions, setShowRegions] = useState(false);
	const [showHamburgerMenuRegions, setShowHamburgerMenuRegions] = useState(false);
	const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

	const navigate = useNavigate();
	const regions = Object.values(Region);

	const handleNavigation = (route: string) => {
		navigate(route);
		setShowRegions(false);
		setShowHamburgerMenuRegions(false);
		setShowHamburgerMenu(false);
	};

	return (
		<header className='bg-[#222831] py-4  px-6 lg:px-10 flex justify-between items-center shadow-2xl sticky top-0 z-50 mb-12'>
			<div className='flex items-center gap-10'>
				<h1
					className='text-2xl text-white font-bold uppercase cursor-pointer'
					onClick={() => handleNavigation('/')}
				>
					Trip Planner
				</h1>

				<div className='hidden lg:flex gap-4 text-white text-lg'>
					<NavLink
						to={'/'}
						onClick={() => handleNavigation('/')}
						className={({ isActive }) => {
							if (isActive) {
								return 'border-b-2 border-white';
							}

							return 'border-b-2 border-primary hover:text-secondary';
						}}
					>
						Home
					</NavLink>

					<NavLink
						to={'/about'}
						onClick={() => handleNavigation('/about')}
						className={({ isActive }) => {
							if (isActive) {
								return 'border-b-2 border-white';
							}

							return 'border-b-2 border-primary hover:text-secondary';
						}}
					>
						About
					</NavLink>

					<div className='relative'>
						<button
							className='hover:text-[#76ABAE] flex items-center gap-2'
							onClick={() => setShowRegions(!showRegions)}
						>
							Region <FontAwesomeIcon icon={showRegions ? faChevronUp : faChevronDown} />
						</button>

						<div
							className={`absolute top-0 -left-2 w-40 bg-primary mt-[29px] pt-4 flex-col items-start justify-center rounded-b-md ${
								showRegions ? 'flex' : 'hidden'
							}`}
						>
							{regions.map((region) => (
								<button className='hover:bg-secondary hover:text-primary cursor-pointer w-full text-start pl-6 py-2 border-t-2 border-secondary'>
									{region}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className='hidden lg:flex gap-4 text-white'>
				<button
					className='text-lg flex items-center gap-3 hover:text-[#76ABAE]'
					onClick={() => handleNavigation('/trip-plan')}
				>
					<FontAwesomeIcon icon={faPlaneUp} className='size-6' /> Trip Plan
				</button>

				<button className='text-lg flex items-center gap-3 hover:text-[#76ABAE]'>
					<FontAwesomeIcon icon={faLocationDot} className='size-6' /> Planned Trips
				</button>
			</div>

			<div
				className='flex lg:hidden flex-col items-center justify-center gap-[8px] z-40 cursor-pointer p-3 min-h-12 max-h-12'
				onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
			>
				<span
					className={`border-2 bg-white border-white w-10 rounded-md ${
						showHamburgerMenu && 'rotate-[45deg] absolute'
					}`}
				></span>
				<span
					className={`border-2 bg-white border-white w-10 rounded-md ${
						showHamburgerMenu && 'hidden'
					}`}
				></span>
				<span
					className={`border-2 bg-white border-white w-10 rounded-md ${
						showHamburgerMenu && 'rotate-[-45deg] relative'
					}`}
				></span>
			</div>

			<div
				className={`${
					showHamburgerMenu ? 'flex' : 'hidden'
				} lg:hidden fixed flex-col justify-start items-center top-16 right-0 w-full h-screen py-4 bg-primary text-white`}
			>
				<button className='hover:bg-[#76ABAE] w-full py-4'>Home</button>
				<hr className='w-full border-secondary' />
				<button className='hover:bg-[#76ABAE] w-full py-4'>About</button>
				<hr className='w-full border-secondary' />
				<button
					className='hover:bg-[#76ABAE] flex justify-center items-center gap-2 w-full py-4'
					onClick={() => setShowHamburgerMenuRegions(!showRegions)}
				>
					Region <FontAwesomeIcon icon={faChevronDown} />
				</button>

				<div
					className={`flex w-full bg-primary flex-col items-center rounded-b-md ${
						showHamburgerMenuRegions ? 'flex' : 'hidden'
					}`}
				>
					<button className='hover:bg-secondary hover:text-primary cursor-pointer w-full text-center py-4'>
						Asia
					</button>
					<button className='hover:bg-secondary hover:text-primary cursor-pointer w-full text-center py-4'>
						Africa
					</button>
					<button className='hover:bg-secondary hover:text-primary cursor-pointer w-full text-center py-4'>
						Europe
					</button>
					<button className='hover:bg-secondary hover:text-primary cursor-pointer w-full text-center py-4'>
						Americas
					</button>
					<button className='hover:bg-secondary hover:text-primary cursor-pointer w-full text-center py-4'>
						Oceania
					</button>
				</div>

				<hr className='w-full border-secondary' />

				<button
					className='flex justify-center items-center gap-3 hover:bg-[#76ABAE] w-full py-4'
					onClick={() => handleNavigation('/trip-plan')}
				>
					Trip Plan
				</button>

				<hr className='w-full border-secondary' />

				<button className='flex justify-center items-center gap-3 hover:bg-[#76ABAE] w-full py-4'>
					Planned Trips
				</button>
			</div>
		</header>
	);
}
