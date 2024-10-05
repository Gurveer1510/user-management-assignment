import { useEffect, useContext } from "react"
import { UserContext } from "./context/userContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import crud from "./utils/crud"
import TableView from "./components/TableView"

function App() {

  const {users, addUsers} = useContext(UserContext)
  

  useEffect(() => {
    const fetchUser = async () => {
      const data = await crud.getAllUsers()
      if (data) {
        addUsers(data)
      }
    }
    fetchUser()
  }, [])

  return (
    <>
      <h1 className="pt-4 text-center text-gray-900 font-bold text-2xl uppercase">User Management</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TableView users={users ? users : []} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
