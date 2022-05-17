import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	setAdd,
	setComplete,
	setFilter,
	fetchThunk,
	selectStatus,
	selectTodos,
} from './features/todos'
import { AppLayout } from '../components/layout/AppLayout'
import { Button } from '../components/Button'

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch()

	return (
		<li
			className={
				(todo.completed ? 'opacity-25' : 'opacity-100') +
				' flex items-center justify-center text-center mb-4 p-4 rounded-lg  transition-opacity delay-200 ease-in-out cursor-pointer border-2 border-gray-300'
			}
			onClick={() => dispatch(setComplete(todo))}
		>
			{todo.title}
		</li>
	)
}

const App = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const todos = useSelector(selectTodos)
	const status = useSelector(selectStatus)

	const submit = e => {
		e.preventDefault()
		if (!value.trim()) {
			return
		}
		const id = Math.random().toString(36)
		const todo = { title: value, completed: false, id }
		dispatch(setAdd(todo))
		setValue('')
	}

	if (status.loading === 'pending') {
		return <p>Cargando...</p>
	}

	if (status.loading === 'rejected') {
		return <p>{status.error}</p>
	}

	return (
		<AppLayout>
			<h1 className='text-6xl mb-6'>Todos App</h1>
			<div className=''>
				<form className='mb-4' onSubmit={submit}>
					<input
						className='border-2 border-gray-300 focus:border-gray-500 focus:outline-none focus:shadow-outline w-full p-2 rounded-lg'
						value={value}
						onChange={e => setValue(e.target.value)}
						placeholder='Add Todo'
					/>
				</form>
				<div className='flex justify-center'>
					<Button onClick={() => dispatch(setFilter('all'))}>All</Button>
					<Button onClick={() => dispatch(setFilter('complete'))}>
						Complete
					</Button>
					<Button onClick={() => dispatch(setFilter('incomplete'))}>
						Incomplete
					</Button>
				</div>
			</div>
			<div className='mt-12 w-80'>
				<ul className='flex justify-center flex-col'>
					{todos.map(todo => (
						<TodoItem key={todo.id} todo={todo} />
					))}
				</ul>
			</div>
		</AppLayout>
	)
}

export default App
