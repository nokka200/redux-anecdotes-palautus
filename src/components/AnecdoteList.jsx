import { useSelector, useDispatch } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'
import Filter from './Filter'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(increaseVote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
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
    </div>
  );
};

export default AnecdoteList;