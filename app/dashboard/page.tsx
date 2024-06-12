import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import { fetchUser } from "../lib/auth";

const fetcher =async () => {
    try {
        const user= await fetchUser();
        return user;
    } catch (error) {
        throw error;
    }
}

const Dashboard=()=>{
    const router=useRouter();
    const {data,error}=useSWR('',fetcher);

    useEffect(()=>{
        if(error){
            router.push('/login');
        }
    },[error]);

    if (error) return <div>Error:{error.message}</div>
    if(!data) return <div>Loading...</div>

    return (
        <div>
            <h1>Welcome to Miot, {data.username}</h1>
        </div>
    );
};

export default Dashboard;