import { query } from "$app/server";

export const returnCount = query("unchecked", async (count: number) => {
  // To simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return count;
});

export const returnDouble = query("unchecked", async (count: number) => {
  // To simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return count * 2;
});
