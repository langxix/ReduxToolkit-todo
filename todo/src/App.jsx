import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div >
     <h1 className='flex justify-center text-4xl font-bold text-white  bg-red-600 py-5 '> Learn about redux toolkit </h1>
     <div className="bg-cover bg-center h-screen pt-2 bg-repeat" style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}>
     <AddTodo />
     <Todos />
     </div>
    </div>
  )
}

export default App
