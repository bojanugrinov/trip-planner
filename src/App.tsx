import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import CountryProvider from './context/country.context';
import ScrollToTop from 'react-scroll-to-top';
import HomeContainer from './components/HomeContainer';
import TripPlan from './components/TripPlan';
import Footer from './components/Footer';
import PlannedTrips from './components/PlannedTrips';
import NotFound from './components/NotFound';
import SearchContainer from './components/SearchContainer';

export default function App() {
	return (
		<CountryProvider>
			<Header />

			<div className='mb-auto'>
				<Routes>
					<Route path='/' element={<HomeContainer />} />
					<Route path='/trip-plan' element={<TripPlan />} />
					<Route path='/planned-trips' element={<PlannedTrips />} />
					<Route path='/search' element={<SearchContainer />} />

					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>

			{/* <div className='mb-auto'>
				<Routes>
					<Route path='/region/:region' element={<RegionContainer />} />
					<Route path='/trip-information-form' element={<TripInformationForm />} />
				</Routes>
			</div> */}

			<ScrollToTop
				smooth
				className='!rounded-[50%] !bg-white !hover:bg-gray-200 !w-14 !h-14 !fixed !bottom-5 !right-5 !filter !drop-shadow-2xl !flex !justify-center !items-center'
			/>

			<Footer />
		</CountryProvider>
	);
}
