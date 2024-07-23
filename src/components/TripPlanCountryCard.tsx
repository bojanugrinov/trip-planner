import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CountryContext } from '../context/country.context';
import { TripCountry } from '../common/types/tripCountry.interface';

type TripPlanCountryCardProps = {
	tripCountry: TripCountry;
};

export default function TripPlanCountryCard({ tripCountry }: TripPlanCountryCardProps) {
	const country = tripCountry.country;
	const [days, setDays] = useState(tripCountry.days);
	const { handleAddToTripCountries, handleTripCountryDaysChange } = useContext(CountryContext);

	useEffect(() => {
		handleTripCountryDaysChange(country, days);
	}, [days]);

	return (
		<div className='flex items-center gap-x-4'>
			<div className='flex flex-col md:flex-row grow gap-y-4 justify-between items-right shadow-lg py-4 px-6 rounded-lg bg-white'>
				<div className='flex items-center gap-x-4'>
					<img
						src={country.flags.png}
						alt={`${country.name.common} Flag`}
						className='w-16 h-10 object-cover'
					/>
					<h1 className='text-md lg:text-xl text-primary font-semibold'>{country.name.common}</h1>
				</div>

				<div className='flex justify-center items-center gap-x-4'>
					<button
						disabled={days === 1}
						className='flex justify-center items-center rounded-[50%] w-8 h-8 text-2xl bg-primary text-white hover:bg-secondary hover:text-primary transition ease-in-out disabled:bg-gray-300'
						onClick={() => setDays(days - 1)}
					>
						<span className='mb-1'>-</span>
					</button>

					<p className='font-semibold text-primary text-lg w-6 text-center'>{days}</p>

					<button
						disabled={days === 30}
						className='flex justify-center items-center rounded-[50%] w-8 h-8 text-2xl bg-primary text-white hover:bg-secondary hover:text-primary transition ease-in-out disabled:bg-gray-300'
						onClick={() => setDays(days + 1)}
					>
						<span className='mb-1'>+</span>
					</button>
				</div>
			</div>
			<button onClick={() => handleAddToTripCountries(country, days)}>
				<FontAwesomeIcon icon={faTrash} className='trash-icon size-5 transition ease-in-out' />
			</button>
		</div>
	);
}
