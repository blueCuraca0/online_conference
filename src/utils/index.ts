export const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
export const appEnvironment = process.env.REACT_APP_ENVIRONMENT;

export const passwordValidationRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const CONFERENCE_LINK_BASE = `${apiBaseUrl}/conference/`;
// export const STUB_LINK = "https://confly.app/r/quiet-river-204";