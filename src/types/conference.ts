// API

export interface CreateConferenceRequest {
  name: string | null;
  agenda: string | null;
  date: string | null;
  duration: number;
}

export interface ConferenceResponse extends CreateConferenceRequest {
  id: string;
  created_at: string;
  creator_id: string;
  ended_at: string | null;
  code: string | null;
}

export interface JoinableConferenceResponse extends ConferenceResponse {
  token: string;
}

// Internal

export interface Conference {
  id: string;
  createdAt: string;
  name: string | null;
  agenda: string | null;
  date: string | null;
  creatorId: string;
  duration: number;
  endedAt: string | null;
  code: string | null;
}

export interface JoinableConference extends Conference {
  token: string;
}

export const mapConference = (r: ConferenceResponse): Conference => ({
  id: r.id,
  createdAt: r.created_at,
  name: r.name,
  agenda: r.agenda,
  date: r.date,
  creatorId: r.creator_id,
  duration: r.duration,
  endedAt: r.ended_at,
  code: r.code,
});

export const mapJoinableConference = (r: JoinableConferenceResponse): JoinableConference => ({
  ...mapConference(r),
  token: r.token,
});
