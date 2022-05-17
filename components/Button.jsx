export const Button = ({ children, onClick }) => {
	return (
		<button
			className='border-2 bg-indigo-400 border-gray-300 rounded-lg p-2 text-white hover:bg-indigo-500 hover:text-white'
			onClick={onClick}
		>
			{children}
		</button>
	)
}
