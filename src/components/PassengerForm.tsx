import { ReactNode, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { IPassengerForm } from '../common/types/passengerForm.interface';
import { CountryContext } from '../context/country.context';
import { PlannedTrip } from '../common/types/plannedTrip.interface';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const inputClasses = `
mt-1 block w-full px-3 py-2 bg-white border border-secondary rounded-md text-sm shadow-sm placeholder-slate-400
focus:invalid:border-red-500 focus:invalid:ring-red-500
focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
invalid:border-red-500 invalid:text-red-600
`;

export default function PassengerForm() {
	const { tripCountries, totalTripDuration, handleAddToPlannedTrips, handleClearTripCountries } =
		useContext(CountryContext);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: IPassengerForm) => {
		const plannedTrip = {
			id: uuidv4(),
			passenger: data,
			totalTripDuration,
			tripCountries,
			createdAt: new Date(),
		} satisfies PlannedTrip;

		handleAddToPlannedTrips(plannedTrip);
		handleClearTripCountries();
		navigate('/planned-trips');
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col justify-center items-center gap-y-5'
		>
			{/* NAME */}
			<label className='block w-80'>
				<span className='block text-sm font-medium primary'>Name</span>
				<input
					{...register('name', {
						required: '* Name is required',
						minLength: {
							value: 3,
							message: '* Name must be at least 3 characters long',
						},
					})}
					type='text'
					className={inputClasses}
				/>
				<p className='text-sm mt-1 text-red-500 font-semibold'>
					{errors.name?.message as ReactNode}
				</p>
			</label>

			{/* EMAIL */}
			<label className='block w-80'>
				<span className='block text-sm font-medium text-primary'>Email</span>
				<input
					{...register('email', {
						required: '* Email is required',
					})}
					type='email'
					className={inputClasses}
				/>
				<p className='text-sm mt-1 text-red-500 font-semibold'>
					{errors.email?.message as ReactNode}
				</p>
			</label>

			{/* BUDGET */}
			<label className='block w-80'>
				<span className='block text-sm font-medium text-primary'>Budget</span>
				<input
					{...register('budget', {
						required: '* Budget is required',
						min: {
							value: 100,
							message: '* Budget must be at least $ 100',
						},
					})}
					type='number'
					min={0}
					className={inputClasses}
				/>
				<p className='text-sm mt-1 text-red-500 font-semibold'>
					{errors.budget?.message as ReactNode}
				</p>
			</label>

			{/* PASSPORT NUMBER */}
			<label className='block w-80'>
				<span className='block text-sm font-medium text-primary'>Passport Number</span>
				<input
					{...register('passportNumber', {
						required: '* Passport number is required',
					})}
					type='text'
					className={inputClasses}
				/>
				<p className='text-sm mt-1 text-red-500 font-semibold'>
					{errors.passportNumber?.message as ReactNode}
				</p>
			</label>

			{/* COMMENTS */}
			<label className='block w-80'>
				<span className='block text-sm font-medium text-primary'>Comments</span>

				<textarea
					{...register('comments', {
						maxLength: {
							value: 100,
							message: 'Comments must be under 30 characters.',
						},
					})}
					className={inputClasses + 'min-h-40'}
				></textarea>

				<p className='text-sm mt-1 text-red-500 font-semibold'>
					{errors.comments?.message as ReactNode}
				</p>
			</label>

			<div className='flex gap-x-6'>
				<button
					type='submit'
					className='py-2 px-4 bg-primary hover:bg-secondary hover:text-primary text-white rounded-lg mx-auto'
				>
					Plan Trip
				</button>

				<button
					type='reset'
					className='py-2 px-4 bg-gray-500 hover:bg-red-500 text-white rounded-lg mx-auto'
				>
					Reset Form
				</button>
			</div>
		</form>
	);
}
