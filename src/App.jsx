import { useSelector, useDispatch } from 'react-redux'
import { getId } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(increaseVote(id))
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    console.log('addAnecdote', event)
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('content', content)
    const toAdd = createAnecdote(content)
    console.log('toAdd', toAdd)
    dispatch(createAnecdote(content)) // metodi puuttuu reducerista

  };

  const increaseVote = (id) => {
    return {
      type: 'VOTE',
      payload: { id }
    };
  };

  const createAnecdote = (content) => {
    console.log('content inside', content);
    return {
      type: 'CREATE',
      payload: {
        content,
        id: getId(), // Tässä ongelma
        votes: 0
      }
    };
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .slice() // docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
          <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App