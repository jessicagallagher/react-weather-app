const apiKey = process.env.REACT_APP_API;
const baseURL = process.env.REACT_APP_BASE_URL;

export const forecast = (loc) =>
  `${baseURL}?q=${loc}&units=imperial&cnt=7&appid=${apiKey}`;
