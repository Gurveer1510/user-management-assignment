import UserType from "../types"
import UpdateUserModal from "./UpdateUserModal";
import crud from "../utils/crud";
import { UserContext } from "../context/userContext";
import {useContext, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import ConfirmModal from "./ConfirmModal";

interface ProfileModalProps {
    selectedUser: UserType
    closeModal: () => void
}

const ProfileModal: React.FC<ProfileModalProps> = ({
    selectedUser,
    closeModal
}) => {

    const { deleteUser } = useContext(UserContext)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [confirmModal, setConfirmModal] = useState(false)

    const confirmModalOpen = () => {
        setConfirmModal(true)
        
    }

    const deleteHandler = async () => {
        const res = await crud.deleteUser(selectedUser.id)
        if (res) {
            deleteUser(selectedUser.id)
            closeModal()
        }
    } 

    const openUpdateModal = () => {
        setIsUpdateModalOpen(true)
    }

    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false)
        closeModal()
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 ">
            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-2xl w-full">
                <div className="bg-gray-50 p-6 sm:p-8 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img
                            src="/src/assets/placeholder.jpg"
                            alt="avatar"
                            className="h-24 w-24 rounded-full border-4 border-white shadow-lg"
                        />
                        <h2 className="text-2xl font-bold text-gray-900">{selectedUser.name}</h2>
                    </div>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                        <IoCloseOutline size={32} />
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex items-center space-x-3">
                        <CiMail className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">{selectedUser.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaPhone className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">{selectedUser.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <LuMapPin className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">{selectedUser.address && selectedUser.address.city}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaHome className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">{selectedUser.address && selectedUser.address.street}</span>
                    </div>
                    <div className="w-full flex flex-row-reverse gap-x-2">

                        <MdDelete
                            className="cursor-pointer"
                            onClick={confirmModalOpen}
                            size={30}
                        />
                        <MdModeEditOutline
                            onClick={openUpdateModal}
                            className="cursor-pointer"
                            size={30}
                        />

                    </div>
                </div>
            </div>
            {
                isUpdateModalOpen && (
                    <UpdateUserModal
                        user={selectedUser}
                        closeUpdateModal={closeUpdateModal}
                    />
                )
            }
            {
                confirmModal && (
                    <ConfirmModal
                        deleteHandler={deleteHandler}
                    />
                )
            }
        </div>
    )
}

export default ProfileModal