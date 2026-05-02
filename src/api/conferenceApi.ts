import api from "api/axios";

const conferenceApi = {
  getExampleInfo: async () => {
    try {
      const response = await api.get("example/self/");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default conferenceApi;
