import api from "api/axios";
import { ApiResponse } from "types/api";
import { ConferenceTestResponse, CreateConferenceTestRequest } from "types/conferenceTest";

const conferenceTestApi = {
  getConferenceTest: async (conferenceId: string): Promise<ApiResponse<ConferenceTestResponse>> => {
    try {
      const response = await api.get("conference-tests", { params: { conferenceId } });
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },

  submitAnswer: async (conferenceId: string, isCorrect: boolean): Promise<ApiResponse<ConferenceTestResponse>> => {
    try {
      const response = await api.patch("conference-tests", { conferenceId, isCorrect });
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },

  createConferenceTest: async (fields: CreateConferenceTestRequest): Promise<ApiResponse<ConferenceTestResponse>> => {
    try {
      const response = await api.post("conference-tests", fields);
      return response.data;
    } catch (error: unknown) {
      return { success: false, data: error instanceof Error ? error.message : "Unknown error" };
    }
  },
};

export default conferenceTestApi;
