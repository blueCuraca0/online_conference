// API

export interface ProfileResponse {
  id: string;
  email: string;
  name: string;
  pronouns: string;
  role: string;
  timezone: string;
  bio: string;
  avatarUrl: string;
  created_at: string;
  connection_id: number;
}

// Internal

export interface Profile {
  userId: string;
  email: string;
  displayName: string;
  pronouns: string;
  role: string;
  timezone: string;
  bio: string;
  avatarUrl: string;
  createdAt: string;
  connectionId: number;
}

