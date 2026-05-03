import api from "api/axios";
import { ConferenceResponse } from "types/conference";
import { ApiResponse } from "types/api";

const conferenceApi = {
  getConferences: async (): Promise<ApiResponse<ConferenceResponse[]>> => {
    try {
      const response = await api.get("conferences");
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },

  createConference: async (fields: Partial<ConferenceResponse>): Promise<ApiResponse<ConferenceResponse>> => {
    try {
      const response = await api.post("conferences", fields);
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },

  updateConference: async (id: string, fields: Partial<ConferenceResponse>): Promise<ApiResponse<ConferenceResponse>> => {
    try {
      const response = await api.patch("conferences", fields, { params: { id } });
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },

  deleteConference: async (id: string): Promise<ApiResponse<ConferenceResponse>> => {
    try {
      const response = await api.delete("conferences", { params: { id } });
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },
};

export default conferenceApi;
