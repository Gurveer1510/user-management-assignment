import UserType from "../types"
import { useState } from "react"
import ProfileModal from "./ProfileModal"
import { FaPlus } from "react-icons/fa";
import CreateUserModal from "./CreateUserModal";

const TableView = ({
    users
}: { users: UserType[] }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState<UserType | null>(null)
    const [isFormOpen, setisFormOpen] = useState(false)

    const openModal = (user: UserType) => {
        setIsModalOpen(true)
        setSelectedUser(user)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedUser(null)
    }

    const openForm = () => {
        setisFormOpen(true)
    }
    const closeForm = () => {
        setisFormOpen(false)
    }

    if (users)
        return (

            <div className="container mx-auto py-10">
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <div className="px-4 py-2 flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-900">
                            List of Users
                        </h2>
                        <button className="px-3 py-2 rounded-lg bg-gray-600 text-white text-lg" onClick={openForm}>
                            <p className="flex items-center gap-x-2">
                                <FaPlus size={16} />
                                Add User
                            </p>
                        </button>
                    </div>
                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">user id</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Street</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.map((user, index) => (
                                <tr
                                    key={user.id}
                                    className={`hover:bg-gray-50 cursor-pointer ${index % 2 == 0 ? "bg-gray-50 hover:bg-gray-100" : "bg-white hover:bg-gray-50"}`}
                                    onClick={() => openModal(user)}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:underline text-center">{user.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:underline">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hover:underline">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hover:underline">{user.username}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.address && user.address.city}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.address && user.address.street}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {isModalOpen && selectedUser && (
                    <ProfileModal
                        selectedUser={selectedUser}
                        closeModal={closeModal}
                    />
                )}
                {
                    isFormOpen && (
                        <CreateUserModal
                            closeForm={closeForm}

                        />
                    )
                }
            </div>

        )
}
export default TableView