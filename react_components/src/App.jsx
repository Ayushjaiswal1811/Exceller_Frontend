import {Hello} from "./components/ui/Card1"
import {Welcome} from "./components/ui/Welcome"
import {Header} from "./components/ui/Header"
import {Footer} from "./components/ui/Footer"
import "./App.css"
const App = () => {
  return (
    <>
    <div >
      <Header />
    </div>
    <div>
      <Welcome />
    </div>
    <div>
      <Footer />
    </div>
    </>
  )
}

export default App
