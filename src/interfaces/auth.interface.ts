export interface AuthUser {
  name: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  message: string;
  user: AuthUser;
  token: string;
}

export interface TokenPayload {
  id: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
}

export interface SessionUser {
  name: string;
  email: string;
}

export type ActionResult =
  | { ok: true; message: string }
  | { ok: false; message: string; unauthorized?: boolean };
