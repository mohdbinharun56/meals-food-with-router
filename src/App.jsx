import { Outlet } from "react-router-dom"
// import Header from "./Components/Header/Header"

function App() {

  return (
    <>
      <div className="">
        {/* <div className="flex justify-between items-center my-10 mx-40">
          <h1>Restaurant</h1>
          <Header></Header>
        </div> */}
        <div>
          <Outlet></Outlet>
        </div>
        <div>
          <footer>
            footer
          </footer>
        </div>
      </div>
    </>
  )
}

export default App