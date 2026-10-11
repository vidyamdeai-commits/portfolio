import { MessageCircle } from "lucide-react";
import { site } from "@/lib/content";
import { whatsappHref } from "@/lib/utils";

/** Floating click-to-chat. Hidden until the client confirms a WhatsApp number. */
export function WhatsAppButton() {
  if (!site.whatsapp) return null;
  return (
    <a
      href={whatsappHref(site.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
