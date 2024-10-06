import { IoCloseOutline } from "react-icons/io5"
import { FormFields } from "../types"
import { useForm, SubmitHandler } from "react-hook-form"
import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { toast } from "react-toastify"
import UserType from "../types"
import InputBox from "./InputBox"

interface UpdateUserModalProps {
    closeUpdateModal: () => void
    user: UserType
}

const UpdateUserModal: React.FC<UpdateUserModalProps> = ({
    closeUpdateModal,
    user
}) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues:{
            name: "",
            email: "",
            phone: "",
            street: "",
            city: "",
            username: user.username
        }
    })

    const { updateUser } = useContext(UserContext)

    const onSubmit : SubmitHandler<FormFields> = (data) => {
        const body = {
            id: user.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            username: data.username,
            address:{
                city: data.city,
                street: data.street
            }
        }
        updateUser(user.id, body)
        closeUpdateModal()
        toast.success("user updated",{
            position: "bottom-left"
        })
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-md w-full">
                <div className="bg-gray-100 p-6 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Update User</h2>
                    <button onClick={closeUpdateModal} className="text-gray-500 hover:text-gray-700 transition-colors duration-150 ease-in-out">
                        <IoCloseOutline size={32} />
                        <span className="sr-only">Close form</span>
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                    <div>
                        {/* email */}
                        <InputBox
                            name="email"
                            register={register}
                            type="email"
                            placeholder="Email"
                            options={{
                                pattern: {
                                    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Enter a valid email address"
                                },
                                required: "Email is required"
                            }}
                            errors={errors}
                        />

                    </div>
                    <div>

                        {/* name */}
                        <InputBox
                            name="name"
                            register={register}
                            type="text"
                            placeholder="Name"
                            options={{
                                minLength: { value: 3, message: "Name must be at least 3 characters" },
                                required: "Name is required",
                            }}
                            errors={errors}
                        />

                    </div>
                    <div>

                        {/* username */}
                        <InputBox
                            name="username"
                            register={register}
                            type="text"
                            disabled
                            placeholder={user.username}
                            options={{
                                minLength: { value: 3, message: "username must be at least 3 characters" },
                                required: "Username is required",
                            }}
                            errors={errors}
                            classname="cursor-not-allowed"
                        />
                    </div>
                    <div>

                        {/* phone */}
                        <InputBox
                            name="phone"
                            register={register}
                            type="text"
                            placeholder="Phone"
                            options={{
                                required: "Phone number is required",
                                pattern: {
                                    value: /^\d{10}$/, // Regular expression to match exactly 10 digits
                                    message: "Phone number must be exactly 10 digits",
                                },
                            }}
                            errors={errors}
                        />
                    </div>
                    <div>

                        {/* city */}
                        <InputBox
                            name="city"
                            register={register}
                            type="text"
                            placeholder="City"
                            options={{
                                required: "city is required"
                            }}
                            errors={errors}
                        />
                    </div>
                    <div>

                        {/* street */}
                        <InputBox
                            name="street"
                            register={register}
                            type="text"
                            placeholder="Street"
                            options={{
                                required: "street is required"
                            }}
                            errors={errors}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-150 ease-in-out"
                        >
                            Update User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUserModal