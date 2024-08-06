import { useContext, useEffect } from 'react';
import CountryCard from './CountryCard';
import { CountryContext } from '../context/country.context';
import { Country } from '../common/types/country.interface';

export default function HomeContainer() {
	const { countries } = useContext(CountryContext);

	useEffect(() => {
		document.title = 'Trip Planner';
	}, []);

	return (
		<main>
			<section className='flex flex-wrap justify-center gap-y-10 gap-x-10 mx-12'>
				{countries.map((country: Country) => (
					<CountryCard country={country} key={country.name.common} />
				))}
			</section>
		</main>
	);
}
