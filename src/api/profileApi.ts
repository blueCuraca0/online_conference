import api from "api/axios";
import { ProfileResponse } from "types/profile";

const profileApi = {
  getProfile: async (): Promise<ProfileResponse> => {
    try {
      const response = await api.get("profile");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createUser: async (fields: Pick<ProfileResponse, 'id' | 'email' | 'name'>): Promise<ProfileResponse> => {
    try {
      const response = await api.post("users", fields);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUsers: async (): Promise<ProfileResponse[]> => {
    try {
      const response = await api.get("users");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUserById: async (id: string): Promise<ProfileResponse> => {
    try {
      const response = await api.get("users", { params: { id } });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (fields: Partial<ProfileResponse>): Promise<ProfileResponse> => {
    try {
      const response = await api.patch("users", fields);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async (): Promise<ProfileResponse> => {
    try {
      const response = await api.delete("users");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default profileApi;
