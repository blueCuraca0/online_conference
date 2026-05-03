// API

export interface ConferenceResponse {
  id: string;
  created_at: string;
  name: string | null;
  agenda: string | null;
  date: string | null;
  creator_id: string;
}

// Internal

export interface Conference {
  id: string;
  createdAt: string;
  name: string | null;
  agenda: string | null;
  date: string | null;
  creatorId: string;
}

export const mapConference = (r: ConferenceResponse): Conference => ({
  id: r.id,
  createdAt: r.created_at,
  name: r.name,
  agenda: r.agenda,
  date: r.date,
  creatorId: r.creator_id,
});
