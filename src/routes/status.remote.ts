import { query } from "$app/server";

export const getMood = query("unchecked", (status: boolean) => {
  if (status) {
    return "Happy";
  }
  return "Sad";
});

export const getWeather = query("unchecked", (status: boolean) => {
  if (status) {
    return "Sunny";
  }
  return "Rainy";
});
