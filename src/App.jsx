import Blocks from './components/Blocks'
import FakeAPI from './components/FakeAPI'

function App() {


  return (
    <>
      <div className='app py-5'>
        <Blocks />
        <hr className='my-5' />
        <FakeAPI />
      </div>
    </>
  )
}

export default App