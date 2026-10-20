
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Copy,
  MessageCircle,
  Check,
} from "lucide-react";
import { Particles } from "../components/Particles";

const contactInfo = {
  phone: "+55 11 93392-3603",
  whatsapp: "5511933923603",
  email: "reishenrique261@gmail.com",
  location: "Suzano, SP, Brasil",
};

const whatsappMessage = "Olá vim pelo seu portifólio";

const openWhatsApp = () => {
  const url = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(url, "_blank", "noopener,noreferrer");
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Não foi possível copiar o e-mail:", error);
    }
  };

  const contactItems = [
    {
      label: "TELEFONE / WHATSAPP",
      value: contactInfo.phone,
      icon: Phone,
      action: openWhatsApp,
    },
    {
      label: "E-MAIL",
      value: contactInfo.email,
      icon: Mail,
      action: handleCopyEmail,
    },
    {
      label: "LOCALIZAÇÃO",
      value: contactInfo.location,
      icon: MapPin,
    },
  ];

  const iconButtonClass =
    "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lavender transition-all hover:border-lavender hover-animation";

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center overflow-hidden section-spacing"
    >
      <Particles
        className="absolute inset-0 -z-10"
        quantity={70}
        ease={80}
        color="#ffffff"
        refresh
      />

      <div className="relative z-10 mx-auto w-full max-w-2xl px-5">
        <div className="rounded-2xl border border-white/10 bg-primary p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/70">
              Contatos
            </h2>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copiar e-mail"
                title={copied ? "E-mail copiado" : "Copiar e-mail"}
                className={iconButtonClass}
              >
                {copied ? <Check size={17} /> : <Copy size={17} />}
              </button>

              <button
                type="button"
                onClick={openWhatsApp}
                aria-label="Conversar pelo WhatsApp"
                title="WhatsApp"
                className={iconButtonClass}
              >
                <MessageCircle size={18} />
              </button>
            </div>
          </div>

          <div className="mb-6 border-t border-white/10" />

          <div className="space-y-6">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/30 text-lavender">
                    <Icon size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-[10px] font-semibold tracking-[0.25em] text-white/50 sm:text-xs">
                      {item.label}
                    </p>

                    {item.action ? (
                      <button
                        type="button"
                        onClick={item.action}
                        className="break-all text-left text-sm font-medium text-white transition-colors hover:text-lavender sm:text-base"
                      >
                        {item.value}
                      </button>
                    ) : (
                      <p className="break-words text-sm font-medium text-white sm:text-base">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-lavender/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
