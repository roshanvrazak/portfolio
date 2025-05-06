import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractDomain(url: string): string {
  if (!url) return ""; // Handle empty or null URLs
  try {
    const hostname = new URL(url).hostname;
    return hostname.replace(/^www\./, "");
  } catch {
    return ""; // Return an empty string if the URL is invalid
  }
}
