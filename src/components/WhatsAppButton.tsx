import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/2348142525424"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,42%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle size={28} className="text-primary-foreground" />
  </a>
);

export default WhatsAppButton;
