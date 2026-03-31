import { useState } from 'react'

const Blocks = () => {

  const items = ['zero', 'one', 'two', 'three', 'four']
  // Active Style Stack 
  const [activeStyleStack, setActiveStyleStack] = useState([])

  function resetStyle() {
    const myInterval = setInterval(() => {
      setActiveStyleStack(prevItems => {
        if (prevItems.length <= 1) {
          clearInterval(myInterval);
          return [];
        }
        return prevItems.slice(0, -1);
      });
    }, 500);
  }

  // On-Click pushes the index of a div in the list - activeStyleStack
  function changeStyle(name) {
    if (!activeStyleStack.includes(name)) {
      setActiveStyleStack([...activeStyleStack, name])
    }
  }

  // Function to CreateDiv
  function createDiv(name, index) {

    const activeStyle = "flex h-25 w-25 text-black items-center justify-center bg-green-400"
    const nonActiveStyle = "flex h-25 w-25 text-black items-center justify-center bg-yellow-400"

    // Classname has a ternary operator which checks condition(if index of div is in activeStyle Stack) before applying style
    return (
      <li key={index} className={activeStyleStack.includes(name) ? activeStyle : nonActiveStyle} onClick={() => changeStyle(name)}> {name} </li>
    )
  }

  return (
    <><div className="block">
      <div className='flex gap-1 p-1 items-center justify-center'>
        {items.map((item, index) => createDiv(item, index))}
      </div >
      <p className='py-5'>click on the blocks above to activate them and then reset button to deactive in the order of activation </p>
      <button className='border-2 w-fit mx-auto px-10' onClick={resetStyle}>Reset</button>
    </div>
    </>
  )
}

export default Blocks