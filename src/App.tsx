import Footer from './components/Footer';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import CountryProvider from './context/country.context';
import RegionContainer from './components/RegionContainer';
import TripPlan from './components/TripPlan';
import TripInformationForm from './components/TripInformationForm';
import PlannedTrips from './components/PlannedTrips';
import ScrollToTop from 'react-scroll-to-top';

export default function App() {
	return (
		<CountryProvider>
			<Header />

			<div className='mb-auto'>
				<Routes>
					<Route path='/' element={<MainContainer />} />
					<Route path='/region/:region' element={<RegionContainer />} />
					<Route path='/trip-plan' element={<TripPlan />} />
					<Route path='/trip-information-form' element={<TripInformationForm />} />
					<Route path='/planned-trips' element={<PlannedTrips />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>

			<ScrollToTop
				smooth
				className='rounded-[50%] bg-white hover:bg-gray-200 w-14 h-14 fixed bottom-5 right-5 filter drop-shadow-2xl flex justify-center items-center'
			/>

			<Footer />
		</CountryProvider>
	);
}
