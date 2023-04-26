import { BrowserRouter } from 'react-router-dom'
import { PagesRoute } from './routes'

function App() {

  return (
    <div className='font-thin'>
      <BrowserRouter>
        <PagesRoute />
      </BrowserRouter>
    </div>
  )
}

export default App;