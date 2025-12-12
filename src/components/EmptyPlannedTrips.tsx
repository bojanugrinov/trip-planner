import { Link } from 'react-router-dom';

export default function EmptyPlannedTrips() {
	return (
		<div>
			<h1 className='text-2xl font-semibold text-primary text-center ml-6 grow mb-4 md:mb-0'>
				Planned Trips
			</h1>

			<div className='text-center mt-12 mx-10'>
				<h2 className='text-secondary text-xl font-semibold'>
					You currently don't have any planned trips.
				</h2>
				<h2 className='text-secondary text-xl mt-4 font-semibold'>
					<span className='text-blue-700 underline cursor-pointer hover:text-blue-400'>
						<Link to='/'>Click here</Link>
					</span>{' '}
					to plan a trip.
				</h2>
			</div>
		</div>
	);
}
