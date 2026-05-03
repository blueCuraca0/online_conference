import api from "api/axios";
import { ProfileResponse } from "types/profile";
import { ApiResponse } from "types/api";

const profileApi = {
  getProfile: async (): Promise<ApiResponse<ProfileResponse>> => {
    try {
      const response = await api.get("profile");
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },

  createUser: async (fields: Pick<ProfileResponse, "id" | "email" | "name">): Promise<ApiResponse<ProfileResponse>> => {
    try {
      const response = await api.post("users", fields);
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },

  getUsers: async (): Promise<ApiResponse<ProfileResponse[]>> => {
    try {
      const response = await api.get("users");
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },

  getUserById: async (id: string): Promise<ApiResponse<ProfileResponse>> => {
    try {
      const response = await api.get("users", { params: { id } });
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },

  updateUser: async (fields: Partial<ProfileResponse>): Promise<ApiResponse<ProfileResponse>> => {
    try {
      const response = await api.patch("users", fields);
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },

  deleteUser: async (): Promise<ApiResponse<ProfileResponse>> => {
    try {
      const response = await api.delete("users");
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },
};

export default profileApi;
