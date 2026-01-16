import { createUserService, getAllUserService, getUserByIdService, updateUserService, deleteUserService } from './userModel.js';

const handleResponse = (res , status , message , data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    });
};

export const createUser = async (req , res , next) => {
    const {name,email,password} = req.body;
    try {
        const newUser = await createUserService(name,email,password);
        handleResponse(res , 201 , "User created successfully" , newUser);
    } catch (error) {
        next(error);
    }
};
export const getAllUser = async (req , res , next) => {
    try {
        const User = await getAllUserService();
        handleResponse(res , 201 , "User fetched successfully" , User);
    } catch (error) {
        next(error);
    }
};
export const getUserById = async (req , res , next) => {
    try {
        const User = await getUserByIdService(req.params.id);
        if(!User){
            return handleResponse(res , 404 , "User not found");
        }
        handleResponse(res , 200 , "User fetched successfully" , User);
    } catch (error) {
        next(error);
    }
};
export const updateUser = async (req , res , next) => {
    const {name , email} = req.body;
    try {
        const updatedUser = await updateUserService(req.params.id , name , email);
        if(!updatedUser){
            return handleResponse(res , 404 , "User not found");
        }
        handleResponse(res , 200 , "User updated successfully" , updatedUser);
    } catch (error) {
        next(error);
    }
};
export const deleteUser = async (req , res , next) => {
    try {
        const deletedUser = await deleteUserService(req.params.id);
        if(!deletedUser){
            return handleResponse(res , 404 , "User not found");
        }
        handleResponse(res , 200 , "User deleted successfully" , deletedUser);
    } catch (error) {
        next(error);
    }
};