import { useContext, useEffect } from 'react';
import { CountryContext } from '../context/country.context';
import TripPlanCountryCard from './TripPlanCountryCard';
import { useNavigate } from 'react-router-dom';
import EmptyTripPlan from './EmptyTripPlan';

export default function TripPlan() {
	const { tripCountries, handleClearTripCountries } = useContext(CountryContext);
	const navigate = useNavigate();

	useEffect(() => {
		document.title = 'Trip Plan | Trip Planner';
	}, []);

	if (!tripCountries.length) {
		return <EmptyTripPlan />;
	}

	return (
		<div className='flex flex-col mx-12'>
			<h1 className='text-2xl font-semibold text-primary text-center ml-6 grow mb-4 md:mb-0'>
				Trip Plan
			</h1>

			<div className='flex flex-col justify-center'>
				<h1 className='text-end text-primary font-semibold mr-[6.5em] hidden md:block'>Days</h1>
				<div className='flex flex-col gap-y-6'>
					{tripCountries.map((tripCountry) => (
						<TripPlanCountryCard tripCountry={tripCountry} key={tripCountry.country.name.common} />
					))}
				</div>
			</div>

			<div className='flex justify-end items-center mt-10 gap-x-2'>
				<button
					className='py-2 px-4 bg-gray-500 text-white rounded-xl shadow-xl hover:bg-red-500 transition ease-in-out'
					onClick={handleClearTripCountries}
				>
					Clear all
				</button>

				<button
					className='py-2 px-4 bg-primary text-white rounded-xl shadow-xl hover:bg-secondary hover:text-primary transition ease-in-out'
					onClick={() => navigate('/trip-information-form')}
				>
					Continue &nbsp; &#8658;
				</button>
			</div>
		</div>
	);
}
