import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function whatsappHref(number: string, text = "Hello Vidyam deAi, I'd like to know more.") {
  return `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}
