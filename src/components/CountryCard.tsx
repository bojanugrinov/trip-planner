import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Country } from '../common/types/country.interface';
import { useContext } from 'react';
import { CountryContext } from '../context/country.context';

type CountryCardProps = {
	country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
	const { tripCountries, handleAddToTripCountries } = useContext(CountryContext);

	function isCountryInTrip(country: Country) {
		return tripCountries.some((tc) => tc.country.name.common === country.name.common);
	}

	return (
		<div className='flex flex-col justify-between p-4 w-64 rounded-md shadow-xl bg-white relative'>
			<div className='w-full h-42 flex flex-col items-center justify-center'>
				<img
					src={country.flags.png}
					alt={`${country.name.common} Flag`}
					className='w-full h-32 object-cover mb-2 brightness-50'
				/>

				<h1 className='text-lg text-center mb-2 font-semibold text-primary'>
					{country.name.common}
				</h1>
				<hr className='w-[90%] border-slate-700' />
			</div>

			<div className='mt-2 mb-4 flex flex-col justify-center items-left gap-y-1 text-primary'>
				<p className='font-semibold'>
					Capital: <span className='font-normal'>{country.capital}</span>
				</p>

				<p className='font-semibold'>
					Region: <span className='font-normal'>{country.region}</span>
				</p>

				<p className='font-semibold'>
					Landlocked:{' '}
					<span className='font-normal'>
						{country.landlocked === true ? (
							<FontAwesomeIcon icon={faCheck} />
						) : (
							<FontAwesomeIcon icon={faX} />
						)}
					</span>
				</p>
			</div>

			<div className='flex justify-center'>
				<button
					className={`${
						isCountryInTrip(country) ? 'bg-secondary text-primary' : 'bg-primary text-white'
					} hover:bg-secondary hover:text-primary transition ease-in-out font-semibold py-2 px-4 rounded-lg`}
					onClick={() => handleAddToTripCountries(country, 1)}
				>
					{isCountryInTrip(country) ? 'Added' : 'Add to trip'}
				</button>
			</div>
		</div>
	);
}
