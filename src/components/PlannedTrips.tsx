import { useContext } from 'react';
import { CountryContext } from '../context/country.context';
import PlannedTripCard from './PlannedTripCard';
import EmptyPlannedTrips from './EmptyPlannedTrips';

export default function PlannedTrips() {
	const { plannedTrips } = useContext(CountryContext);

	if (!plannedTrips.length) {
		return <EmptyPlannedTrips />;
	}

	return (
		<div>
			<h1 className='text-2xl font-semibold text-primary text-center ml-6 grow mb-6'>
				Planned Trips
			</h1>

			<div className='flex flex-wrap justify-center gap-10 mx-16'>
				{plannedTrips.map((trip) => (
					<PlannedTripCard key={trip.id} trip={trip} />
				))}
			</div>
		</div>
	);
}
