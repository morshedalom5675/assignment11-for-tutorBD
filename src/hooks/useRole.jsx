import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const useRole = () => {
    const {user} = useAuth()
  const { data: role = 'student', isLoading } = useQuery({
    queryKey: ["user-role",user?.email],
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_API_URL}/users/${user?.email}/role`
      );
      return res.data.role;
    },
  });
  return {role,isLoading};
};

export default useRole;
