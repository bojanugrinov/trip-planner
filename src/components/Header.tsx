import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronDown,
	faChevronUp,
	faLocationDot,
	faMagnifyingGlass,
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
			{/* HAMBURGER MENU */}
			<div
				className='flex lg:hidden flex-col items-center justify-center gap-[8px] z-40 cursor-pointer min-h-12 max-h-12'
				onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
			>
				<span
					className={`border bg-white border-white w-10 rounded-md ${
						showHamburgerMenu && 'rotate-[45deg] absolute'
					}`}
				></span>
				<span
					className={`border bg-white border-white w-10 rounded-md ${
						showHamburgerMenu && 'hidden'
					}`}
				></span>
				<span
					className={`border bg-white border-white w-10 rounded-md ${
						showHamburgerMenu && 'rotate-[-45deg] relative'
					}`}
				></span>
			</div>

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
							{regions.map((region, index) => (
								<button
									key={index}
									className='hover:bg-secondary hover:text-primary cursor-pointer w-full text-start pl-6 py-2 border-t-2 border-secondary'
									onClick={() => handleNavigation(`/region/${region}`)}
								>
									{region}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-row lg:gap-8 text-white'>
				<button
					className='text-lg hidden lg:flex items-center gap-3 hover:text-[#76ABAE]'
					onClick={() => handleNavigation('/trip-plan')}
				>
					<FontAwesomeIcon icon={faPlaneUp} className='size-6' />{' '}
					<span className='hidden lg:block'>Trip Plan</span>
				</button>

				<button
					className='text-lg hidden lg:flex items-center gap-3 hover:text-[#76ABAE]'
					onClick={() => handleNavigation('/planned-trips')}
				>
					<FontAwesomeIcon icon={faLocationDot} className='size-6' />{' '}
					<span className='hidden lg:block'>Planned Trips</span>
				</button>

				<button
					className='text-lg flex items-center gap-3 hover:text-[#76ABAE]'
					onClick={() => handleNavigation('/search')}
				>
					<FontAwesomeIcon icon={faMagnifyingGlass} className='size-6' />{' '}
					<span className='hidden lg:block'>Search</span>
				</button>
			</div>

			<div
				className={`${
					showHamburgerMenu ? 'flex' : 'hidden'
				} lg:hidden fixed flex-col justify-start items-center top-16 left-0 w-[80%] shadow-2xl h-screen py-4 bg-primary text-white`}
			>
				<button
					className='hover:bg-[#76ABAE] w-full py-4 text-lg'
					onClick={() => handleNavigation('/')}
				>
					Home
				</button>

				<hr className='w-full border-secondary' />

				<button className='hover:bg-[#76ABAE] w-full py-4 text-lg'>About</button>

				<hr className='w-full border-secondary' />

				<button
					className='text-lg flex items-center gap-3 hover:text-[#76ABAE] py-4 w-full justify-center'
					onClick={() => handleNavigation('/trip-plan')}
				>
					{/* <FontAwesomeIcon icon={faPlaneUp} className='size-6' />{' '} */}
					<span className='block'>Trip Plan</span>
				</button>

				<hr className='w-full border-secondary' />

				<button
					className='text-lg flex items-center gap-3 hover:text-[#76ABAE] py-4 w-full justify-center'
					onClick={() => handleNavigation('/planned-trips')}
				>
					{/* <FontAwesomeIcon icon={faLocationDot} className='size-6' />{' '} */}
					<span className='block'>Planned Trips</span>
				</button>

				<hr className='w-full border-secondary' />

				<button
					className='hover:bg-[#76ABAE] flex justify-center items-center gap-2 w-full py-4 text-lg'
					onClick={() => setShowHamburgerMenuRegions(!showRegions)}
				>
					Region <FontAwesomeIcon icon={faChevronDown} />
				</button>

				<div
					className={`flex w-full bg-primary flex-col items-center rounded-b-md ${
						showHamburgerMenuRegions ? 'flex' : 'hidden'
					}`}
				>
					{regions.map((region, index) => (
						<button
							key={index}
							className='hover:bg-secondary hover:text-primary cursor-pointer w-full text-center py-4'
							onClick={() => handleNavigation(`/region/${region}`)}
						>
							{region}
						</button>
					))}
				</div>
			</div>
		</header>
	);
}
