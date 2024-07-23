import { faChevronDown, faChevronUp, faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { PlannedTrip } from '../common/types/plannedTrip.interface';

type PlannedTripCardProps = {
	trip: PlannedTrip;
};

export default function PlannedTripCard({ trip }: PlannedTripCardProps) {
	const [showCountries, setShowCountries] = useState(false);

	const handleShowCountries = () => {
		setShowCountries(!showCountries);
	};

	const date = new Date(trip.createdAt);

	return (
		<div
			className={`px-6 py-4 border border-gray-300 rounded-xl shadow-lg relative flex flex-col w-96 bg-white ${
				!showCountries && 'max-h-[325px]'
			}`}
		>
			<p className='absolute top-3 right-3 text-primary font-semibold'>
				{trip.passenger.passportNumber}
			</p>
			<div className='flex items-center gap-x-4 w-72'>
				<FontAwesomeIcon icon={faPlane} className='user-card size-8' />
				<div>
					<h1 className='text-xl font-bold text-primary'>{trip.passenger.name}</h1>
					<h2 className='text-sm text-primary'>{trip.passenger.email}</h2>
				</div>
			</div>

			<hr className='border-gray-300 my-2' />

			<div className='flex flex-col items-center h-full'>
				<div className='flex justify-between w-full px-6'>
					<p className='text-md text-primary'>Countries</p>
					<p className='text-md text-primary'>{trip.tripCountries.length}</p>
				</div>

				<div className='flex justify-between w-full px-6'>
					<p className='text-md text-primary'>Days</p>
					<p className='text-md text-primary'>{trip.totalTripDuration}</p>
				</div>

				<div className='flex flex-col w-full px-6 mt-4'>
					<p className='text-md text-primary font-semibold'>Comments:</p>
					<p className='text-sm text-primary'>{trip.passenger.comments}</p>
				</div>

				<button
					className='border border-gray-300 w-full mt-4 py-2 rounded-t-lg flex justify-around items-center'
					onClick={handleShowCountries}
				>
					<p>List countries</p>
					{showCountries ? (
						<FontAwesomeIcon icon={faChevronUp} />
					) : (
						<FontAwesomeIcon icon={faChevronDown} />
					)}
				</button>
				<div
					className={`${
						showCountries ? 'flex' : 'hidden'
					} flex-col gap-4 px-2 pt-4 pb-2 border border-gray-300 w-full`}
				>
					{trip.tripCountries.map((country) => (
						<div
							className='flex justify-between items-center px-6'
							key={country.country.name.common}
						>
							<img
								src={country.country.flags.png}
								alt={`${country.country.name.common} Flag`}
								className='w-10 h-6'
							/>
							<p className='text-md text-primary'>{country.country.name.common}</p>
							<p className='text-md text-primary'>{country.days}</p>
						</div>
					))}
				</div>
			</div>

			<hr className='border-gray-300 my-2 mt-4' />

			<div className='flex justify-between mt-2'>
				<h1 className='text-primary text-lg font-semibold'>{`${date.getDate()} ${date.toLocaleString(
					'default',
					{
						month: 'long',
					}
				)}, ${date.getFullYear()}`}</h1>

				<h1 className='text-primary text-lg font-semibold'>
					$ {Number(trip.passenger.budget).toLocaleString()}{' '}
				</h1>
			</div>
		</div>
	);
}
