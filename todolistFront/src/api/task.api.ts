import axios from "axios";
//Models
import type { TaskModel } from "../models/task.model";
//Dto
import type { CreateTaskDto } from "../models/dto/task.dto";


const taskApi = axios.create({
    baseURL: import.meta.env.MODE === 'development'
    ? 'http://localhost:8000/api/v1'
    : 'https://gimnasioreactdjango.onrender.com/gym/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }, 
});

const handleApiError = (error: unknown): never => {
    if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        console.error('API Error:', errorMessage);
        throw new Error(errorMessage);
    }
    throw error;
};

export const CreateTask = async (task: CreateTaskDto ) => {
    try {
        const response = await taskApi.post<TaskModel>('/Task/', task);
        return response.data;
        
    } catch (error) {
        throw handleApiError(error);        
    }
}


