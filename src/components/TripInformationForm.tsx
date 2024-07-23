import { useContext } from 'react';
import { CountryContext } from '../context/country.context';
import { Tooltip } from 'react-tooltip';
import PassengerForm from './PassengerForm';

export default function TripInformationForm() {
	const { tripCountries, totalTripDuration } = useContext(CountryContext);

	return (
		<div className='mb-auto mx-12'>
			<h1 className='text-2xl font-semibold text-primary mb-6 text-center'>Trip Information</h1>

			<div className='flex flex-col justify-center items-center'>
				<div className='flex flex-col items-center gap-y-2 w-80'>
					<div className='flex justify-between'>
						<div className='flex flex-col justify-around items-center w-52'>
							<p className='text-xl text-primary'>{tripCountries.length}</p>
							<p className='text-xl text-primary font-semibold'>
								{tripCountries.length === 1 ? 'Country' : 'Countries'}
							</p>
						</div>

						<div className='flex flex-col justify-around items-center w-52'>
							<p className='text-xl text-primary'>{totalTripDuration}</p>
							<p className='text-xl text-primary font-semibold'>
								{totalTripDuration === 1 ? 'Day' : 'Days'}
							</p>
						</div>
					</div>

					<div className='flex  flex-wrap gap-6 justify-center items-center mt-6'>
						{tripCountries.map((tc) => (
							<div key={tc.country.name.common}>
								<button
									data-tooltip-id={tc.country.name.common}
									data-tooltip-content={tc.country.name.common}
								>
									<img
										src={tc.country.flags.png}
										alt={`${tc.country.name.common} Flag`}
										className='w-12 h-8 object-cover'
									/>
								</button>
								<Tooltip id={tc.country.name.common} />
							</div>
						))}
					</div>
				</div>

				<hr className='border-secondary w-[300px] mx-auto my-4' />

				<PassengerForm />
			</div>
		</div>
	);
}
