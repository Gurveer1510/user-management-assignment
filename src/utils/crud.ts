import axios from "axios";
import { CreateUserType, UpdateUserType } from "../types";

class CRUD {

    getAllUsers = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            if (response.data) {
                return response.data
            } else {
                return []
            }
        } catch (error) {
            return []
        }
    }

    createUser = async (body: CreateUserType) => {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
                name: body.name,
                email: body.email,
                phone: body.phone,
                address: body.address,
                username: body.username
            })
            if (response.data) {
                return response.data
            } else {
                return null
            }
        } catch (error) {
            return null
        }
    }

    getSingleUser = async (id: string) => {
        try {
            const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            if (user.data) {
                return user.data
            } else {
                return {}
            }
        } catch (error) {
            return {}
        }
    }

    deleteUser = async (id: string) => {
        try {
            const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            if(res.data){
                return res.status == 200
            } else{
                return false
            }
        } catch (error : unknown) {
            console.log(error);
            
        }
    }

    updateUser = async (body : UpdateUserType ) => {
        try {
            const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${body.id}`,{
                name: body.name,
                email: body.email,
                phone: body.phone,
                address: body.address,
                username: body.username
            })
            if(res.status == 200){
                return true
            } else{
                return false
            }
        } catch (error) {
            console.log(error);
            
        }
    }

}

const crud = new CRUD()

export default crud