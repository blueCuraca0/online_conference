import { useEffect } from "react";
import conferenceTestApi from "api/conferenceTestApi";
import { ConferenceTestQuestion, mapConferenceTest } from "types/conferenceTest";

import { useConferenceStore } from "stores/conferenceStore";

const POLL_INTERVAL_MS = 10_000;

export const useConferenceTestController = (conferenceId: string | undefined, _isHost: boolean) => {
  const { setCurrentTest } = useConferenceStore();

  useEffect(() => {
    if (!conferenceId) return;

    const fetch = async () => {
      const result = await conferenceTestApi.getConferenceTest(conferenceId);
      if (result.success) setCurrentTest(mapConferenceTest(result.data));
    };

    fetch();
    const interval = setInterval(fetch, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [conferenceId]);

  const createTest = async (question: ConferenceTestQuestion) => {
    if (!conferenceId) return;
    const result = await conferenceTestApi.createConferenceTest({ conference_id: conferenceId, question });
    if (result.success) setCurrentTest(mapConferenceTest(result.data));
  };

  const submitAnswer = async (isCorrect: boolean) => {
    if (!conferenceId) return;
    await conferenceTestApi.submitAnswer(conferenceId, isCorrect);
  };

  return { createTest, submitAnswer };
};
