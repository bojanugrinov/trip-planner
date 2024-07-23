export default function SearchBar({ searchInput, handleSearch }: any) {
	return (
		<div className='flex justify-center mx-12 mb-8'>
			<input
				type='search'
				className='px-6 py-1 border-2 border-tertiary rounded-l-xl w-96 focus:outline-none flex-grow'
				placeholder='Search for a country...'
				ref={searchInput}
				onChange={handleSearch}
			/>

			<button
				type='submit'
				className='flex items-center bg-primary justify-center w-12 h-12 text-white border-2 border-tertiary border-l-0 rounded-r-xl'
				onClick={handleSearch}
			>
				<svg
					className='w-5 h-5'
					fill='none'
					stroke='white'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
					></path>
				</svg>
			</button>
		</div>
	);
}
