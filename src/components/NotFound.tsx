import { useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<div className='flex flex-col justify-center items-center gap-4 my-16'>
			<h1 className='text-5xl font-bold '>404</h1>
			<h2 className='text-2xl '>Page Not Found</h2>
			<button
				className='bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary hover:text-primary'
				onClick={() => navigate('/')}
			>
				Go Back Home
			</button>
		</div>
	);
}
