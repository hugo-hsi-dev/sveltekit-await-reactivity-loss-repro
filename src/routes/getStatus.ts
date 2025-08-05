import { page } from "$app/state";

export function getStatus() {
  let status = page.url.searchParams.get("status");

  return {
    get value() {
      if (!status) {
        return false;
      }
      return status === "true";
    },
  };
}
