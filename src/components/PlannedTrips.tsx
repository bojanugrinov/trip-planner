import { useContext, useEffect } from 'react';
import { CountryContext } from '../context/country.context';
import PlannedTripCard from './PlannedTripCard';
import EmptyPlannedTrips from './EmptyPlannedTrips';

export default function PlannedTrips() {
	const { plannedTrips, handleClearPlannedTrips } = useContext(CountryContext);

	useEffect(() => {
		document.title = 'Planned Trips | Trip Planner';
	}, []);

	if (!plannedTrips.length) {
		return <EmptyPlannedTrips />;
	}

	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='text-2xl font-semibold text-primary text-center ml-6 grow mb-6'>
				Planned Trips
			</h1>

			<div className='flex flex-wrap justify-center gap-10 mx-16 mb-10'>
				{plannedTrips.map((trip) => (
					<PlannedTripCard key={trip.id} trip={trip} />
				))}
			</div>

			<button
				className='py-2 px-4 bg-gray-500 hover:bg-red-500 text-white rounded-lg mx-auto'
				onClick={handleClearPlannedTrips}
			>
				Clear planned trips
			</button>
		</div>
	);
}
