import { useContext, useEffect, useRef, useState } from 'react';
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';
import { CountryContext } from '../context/country.context';
import axios from 'axios';
import { useDebouncedCallback } from 'use-debounce';
import Loader from './Loader';
import { Country } from '../common/types/country.interface';

export default function MainContainer() {
	const { countries, isLoading, setLoader } = useContext(CountryContext);
	const [filteredCountries, setFilteredCountries] = useState(countries);

	const searchInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		setFilteredCountries(countries);
	}, [countries]);

	async function getCountriesByName(countryName: string) {
		setLoader(true);
		try {
			const response = await axios(`https://restcountries.com/v3.1/name/${countryName}`);
			return response.data;
		} catch (error) {
			console.log(error);
		} finally {
			setLoader(false);
		}
	}

	const handleSearch = useDebouncedCallback(async () => {
		if (searchInput.current!.value === '' || undefined) {
			setFilteredCountries(countries);
			return;
		}

		setFilteredCountries(await getCountriesByName(searchInput.current!.value));
	}, 300);

	return (
		<main className='mb-auto'>
			<SearchBar searchInput={searchInput} handleSearch={handleSearch} />

			{isLoading ? (
				<Loader />
			) : (
				<section className='flex flex-wrap justify-center gap-y-10 gap-x-6 mx-12'>
					{filteredCountries ? (
						filteredCountries.map((country: Country) => (
							<CountryCard country={country} key={country.name.common} />
						))
					) : (
						<p className='text-xl font-semibold'>No countries found</p>
					)}
				</section>
			)}
		</main>
	);
}
