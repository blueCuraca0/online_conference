import { useEffect } from "react";
import conferenceApi from "api/conferenceApi";
import { ConferenceResponse, CreateConferenceRequest, mapConference, mapJoinableConference } from "types/conference";
import { useConferenceStore } from "stores/conferenceStore";

export const useConferenceController = (autofetch?: boolean) => {
  const { currentConference, conferences, setCurrentConference, setConferences } = useConferenceStore();

  useEffect(() => {
    if (!autofetch) return;

    (async () => {
      const result = await conferenceApi.getConferences();
      if (result.success) setConferences(result.data.map(mapConference));
    })();
  }, [autofetch, setConferences]);

  const joinConference = async (code: string, connectionId: number) => {
    const result = await conferenceApi.joinConference(code, connectionId);

    console.log({ request: {code, connectionId}, result })

    if (result.success) {
      setCurrentConference(mapJoinableConference(result.data));
      return true;
    } else {
      return false;
    }
  };

  const handleCreateConference = async (fields: CreateConferenceRequest) => {
    const result = await conferenceApi.createConference(fields);
    
    if (result.success) {
      setConferences([...conferences, mapConference(result.data)])
      return result.data.code;
    } else {
      return null;
    }
  };

  const handleUpdateConference = async (id: string, fields: Partial<ConferenceResponse>) => {
    const result = await conferenceApi.updateConference(id, fields);
    if (result.success) {
      const updated = mapConference(result.data);
      setConferences(conferences.map((c) => (c.id === id ? updated : c)));
    }
    return result.success;
  };

  const handleDeleteConference = async (id: string) => {
    const result = await conferenceApi.deleteConference(id);
    if (result.success) setConferences(conferences.filter((c) => c.id !== id));
    return result.success;
  };

  const handleDeclineConference = async (id: string) => {
    const result = await conferenceApi.declineConference(id);
    if (result.success) setConferences(conferences.filter((c) => c.id !== id));
    return result.success;
  };

  return {
    currentConference,
    conferences,
    setCurrentConference,
    joinConference,
    handleCreateConference,
    handleUpdateConference,
    handleDeleteConference,
    handleDeclineConference,
  };
};
