import { ReactNode, createContext, useEffect, useState } from 'react';
import { Country } from '../common/types/country.interface';
import axios from 'axios';
import { TripCountry } from '../common/types/tripCountry.interface';
import { PlannedTrip } from '../common/types/plannedTrip.interface';

type CountryContextProviderType = {
	children: ReactNode | ReactNode[];
};

type CountryContextType = {
	countries: Country[];
	isLoading: boolean;
	setLoader: (value: boolean) => void;
	tripCountries: TripCountry[];
	handleAddToTripCountries: (country: Country, days: number) => void;
	handleTripCountryDaysChange: (country: Country, days: number) => void;
	totalTripDuration: number;
	handleClearTripCountries: () => void;
	handleAddToPlannedTrips: (plannedTrip: PlannedTrip) => void;
	plannedTrips: PlannedTrip[];
};

const defaultValues: CountryContextType = {
	countries: [],
	isLoading: false,
	setLoader: () => {},
	tripCountries: [],
	handleAddToTripCountries: () => {},
	handleTripCountryDaysChange: () => {},
	totalTripDuration: 0,
	handleClearTripCountries: () => {},
	handleAddToPlannedTrips: () => {},
	plannedTrips: [],
};

export const CountryContext = createContext<CountryContextType>(defaultValues);

export default function CountryProvider({ children }: CountryContextProviderType) {
	const [countries, setCountries] = useState<Country[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [tripCountries, setTripCountries] = useState<TripCountry[]>(
		JSON.parse(localStorage.getItem('tripCountries') as string) ?? []
	);
	const [totalTripDuration, setTotalTripDuration] = useState(0);
	const [plannedTrips, setPlannedTrips] = useState<PlannedTrip[]>(
		JSON.parse(localStorage.getItem('plannedTrips') as string) ?? []
	);

	useEffect(() => {
		axios('https://restcountries.com/v3.1/all')
			.then((response) => setCountries(response.data))
			.catch((error) => console.log('Error while fetching countries', { error }));
	}, []);

	const setLoader = (value: boolean) => {
		setIsLoading(value);
	};

	const handleAddToTripCountries = (country: Country, days: number) => {
		if (tripCountries.some((tc) => tc.country.name.common === country.name.common)) {
			const filteredTripCountries = tripCountries.filter(
				(tc) => tc.country.name.common !== country.name.common
			);

			setTripCountries(filteredTripCountries);
		} else {
			const newTripCountry = {
				country,
				days,
			};

			setTripCountries([...tripCountries, newTripCountry]);
		}
	};

	const handleClearTripCountries = () =>
		localStorage.getItem('tripCountries')?.length &&
		(localStorage.removeItem('tripCountries'), setTripCountries([]));

	const handleTripCountryDaysChange = (country: Country, days: number) => {
		const index = tripCountries.findIndex((tc) => tc.country.name.common === country.name.common);
		const updatedTripCountries = [...tripCountries];

		updatedTripCountries[index] = {
			...updatedTripCountries[index],
			days,
		};

		setTripCountries(updatedTripCountries);
	};

	useEffect(() => {
		const totalDuration = tripCountries.reduce((acc, curr) => acc + curr.days, 0);
		setTotalTripDuration(totalDuration);
	}, [tripCountries]);

	useEffect(() => {
		localStorage.setItem('tripCountries', JSON.stringify(tripCountries));
	}, [tripCountries]);

	const handleAddToPlannedTrips = (plannedTrip: PlannedTrip) => {
		if (plannedTrips.some((pt) => pt.id === plannedTrip.id)) {
			const filteredPlannedTrips = plannedTrips.filter((pt) => pt.id !== plannedTrip.id);
			setPlannedTrips(filteredPlannedTrips);
		} else {
			setPlannedTrips([...plannedTrips, plannedTrip]);
		}
	};

	useEffect(() => {
		localStorage.setItem('plannedTrips', JSON.stringify(plannedTrips));
	}, [plannedTrips]);

	return (
		<CountryContext.Provider
			value={{
				countries,
				isLoading,
				setLoader,
				tripCountries,
				handleAddToTripCountries,
				handleTripCountryDaysChange,
				totalTripDuration,
				handleClearTripCountries,
				handleAddToPlannedTrips,
				plannedTrips,
			}}
		>
			{children}
		</CountryContext.Provider>
	);
}
