import { Profile, ProfileResponse } from "types/profile.d";

export const mapProfile = (r: ProfileResponse): Profile => ({
  userId: r.id,
  displayName: r.name,
  pronouns: r.pronouns,
  role: r.role,
  timezone: r.timezone,
  bio: r.bio,
  email: r.email,
  avatarUrl: r.avatarUrl,
  createdAt: r.created_at,
  connectionId: r.connection_id,
});
