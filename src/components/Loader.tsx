export default function Loader() {
	return (
		<div className='flex justify-center my-5'>
			<div
				className='h-16 w-16 animate-spin rounded-full border-8 border-secondary border-e-primary align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white'
				role='status'
			></div>
		</div>
	);
}
