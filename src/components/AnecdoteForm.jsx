import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    console.log('addAnecdote', event)
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('content', content)
    const toAdd = createAnecdote(content)
    console.log('toAdd', toAdd)
    dispatch(createAnecdote(content))
  };


  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
};

export default AnecdoteForm;