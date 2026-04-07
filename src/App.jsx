import Blocks from './components/Blocks'
import FakeAPI from './components/FakeAPI'
import Filter from './components/Filter'

function App() {


  return (
    <>
      <div className='app py-5'>
        <Blocks />
        <hr className='my-5' />
        <Filter />
        <hr className='my-5' />
        <FakeAPI /> 
      </div>
    </>
  )
}

export default App