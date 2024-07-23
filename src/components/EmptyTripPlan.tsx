import { Link } from 'react-router-dom';

export default function EmptyTripPlan() {
	return (
		<div>
			<h1 className='text-2xl font-semibold text-primary text-center ml-6 grow mb-4 md:mb-0'>
				Trip Plan
			</h1>

			<div className='text-center mt-12 mx-10'>
				<h2 className='text-secondary text-xl font-semibold'>
					You currently don't have any countries added to the trip plan.
				</h2>
				<h2 className='text-secondary text-xl mt-4 font-semibold'>
					<span className='text-blue-700 underline cursor-pointer hover:text-blue-400'>
						<Link to='/'>Click here</Link>
					</span>{' '}
					to add a country.
				</h2>
			</div>
		</div>
	);
}
