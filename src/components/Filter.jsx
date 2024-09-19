import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const content = event.target.value;
    console.log('content', content);
    dispatch(filterChange(content));
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} name='filter'/>
    </div>
  )
}

export default Filter