import { useParams } from 'react-router-dom';
import CountryCard from './CountryCard';
import { Region } from '../common/types/region.enum';
import NotFound from './NotFound';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Country } from '../common/types/country.interface';

export default function RegionContainer() {
	const { region } = useParams();
	const [isValidRegion, setIsValidRegion] = useState(true);
	const [regionCountries, setRegionCountries] = useState<Country[]>([]);

	useEffect(() => {
		if (region && region in Region) {
			axios
				.get(`https://restcountries.com/v3.1/region/${region}`)
				.then((response) => setRegionCountries(response.data))
				.catch((error) => console.log('Error while fetching region countries', { error }))
				.finally(() => setIsValidRegion(true));
		} else {
			setIsValidRegion(false);
		}
	}, [region]);

	if (!isValidRegion) {
		return <NotFound />;
	}

	return (
		<main className='lg:mx-12 mb-auto'>
			<p className='text-left text-xl text-primary mb-4 md:ml-10 ml-4 font-semibold'>
				➼ 10 Most popular destinations in {region}
			</p>

			<section className='flex flex-row flex-wrap gap-8 justify-center'>
				{regionCountries.map((country) => (
					<CountryCard country={country} key={country.name.common} />
				))}
			</section>
		</main>
	);
}
