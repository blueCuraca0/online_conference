import api from "api/axios";

const exampleInfoApi = {
  getExampleInfo: async () => {
    try {
      const response = await api.get("example/self/");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default exampleInfoApi;
