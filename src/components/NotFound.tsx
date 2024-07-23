import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div className="flex flex-col justify-center items-center gap-4 my-16">
			<h1 className="text-5xl font-bold ">404</h1>
			<h2 className="text-2xl ">Page Not Found</h2>
			<button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-900">
				<Link to="/">Go Back Home</Link>
			</button>
		</div>
	);
}
