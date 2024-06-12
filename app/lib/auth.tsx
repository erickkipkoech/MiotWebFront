import axios from "axios";

export const loginUser = async (username: any, password: any) => {
    try {
        const response = await axios.post(`https://localhost:7291/api/MiotAuthenticate/login`, { username, password });
        return response.data;
    } catch (error) {
        throw new Error('Login failed. Please try again.');
    }
};
 export const logoutUser=async () => {
    
 };

 export const fetchUser=async () => {
    try {
        const response=await axios.get('');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user.');
        
    }
 }
