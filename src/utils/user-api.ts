import API from "./api";

export interface User {
  id: string;
  username: string;
  email: string;
}

export const fetchUserById = async (userId: string): Promise<User | null> => {
  try {
    const response = await API.get(`/api/users/v1/${userId}`);
    return response.data as User;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
