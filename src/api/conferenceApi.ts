import api from "api/axios";
import { ConferenceResponse, CreateConferenceRequest, JoinableConferenceResponse } from "types/conference";
import { ApiResponse } from "types/api";

const conferenceApi = {
  joinConference: async (code: string, connectionId: number): Promise<ApiResponse<JoinableConferenceResponse>> => {
    try {
      console.log("Joining conference with code:", code, "and connectionId:", connectionId);
      const response = await api.get(`conferences?code=${code}&connectionId=${connectionId}`);
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },

  getConferences: async (): Promise<ApiResponse<ConferenceResponse[]>> => {
    try {
      const response = await api.get("conferences");
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },

  createConference: async (fields: CreateConferenceRequest): Promise<ApiResponse<ConferenceResponse>> => {
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

  declineConference: async (conferenceId: string): Promise<ApiResponse<unknown>> => {
    try {
      const response = await api.delete("conferences/participants", { params: { conferenceId } });
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },
};

export default conferenceApi;
