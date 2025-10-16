"use client";

import { Partytown } from "@qwik.dev/partytown/react";

export default function PartytownSetup() {
  return (
    <>
      <Partytown debug={false} forward={["dataLayer.push", "fbq"]} />

      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({
                  'gtm.start': new Date().getTime(),
                  event: 'gtm.js'
              });
              var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src =
                  'https://server.bossamilagres.com.br/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-KPSNXP7G');
          `,
        }}
      />
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            const whatsappButton = document.createElement("div");
            whatsappButton.setAttribute("aria-label", "Abrir conversa no WhatsApp");
            whatsappButton.style.position = "fixed";
            whatsappButton.style.bottom = "20px";
            whatsappButton.style.right = "15px";
            whatsappButton.style.backgroundColor = "#25d366";
            whatsappButton.style.borderRadius = "50%";
            whatsappButton.style.width = "55px";
            whatsappButton.style.height = "55px";
            whatsappButton.style.display = "flex";
            whatsappButton.style.justifyContent = "center";
            whatsappButton.style.alignItems = "center";
            whatsappButton.style.cursor = "pointer";
            whatsappButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            whatsappButton.style.zIndex = "999999";

            const whatsappIcon = document.createElement("img");
            whatsappIcon.src = "https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png";
            whatsappIcon.alt = "WhatsApp";
            whatsappIcon.style.width = "30px";
            whatsappIcon.style.height = "30px";
            whatsappButton.appendChild(whatsappIcon);

            document.body.appendChild(whatsappButton);

            whatsappButton.addEventListener("click", () => {
                const url = new URL(window.location.href);
                const utm_source = url.searchParams.get("utm_source") || "";
                const utm_medium = url.searchParams.get("utm_medium") || "";
                const utm_campaign = url.searchParams.get("utm_campaign") || "";
                const utm_content = url.searchParams.get("utm_content") || "";
                const utm_term = url.searchParams.get("utm_term") || "";

                const baseMessage = "Olá! Tenho interesse no Bossa Eco Luxury Villas.";
                let whatsappUrl = \`https://wa.me/5582991653973?text=\${encodeURIComponent(baseMessage)}\`;

                if (utm_source) {
                    whatsappUrl += \`&utm_source=\${encodeURIComponent(utm_source)}\`;
                }
                if (utm_medium) {
                    whatsappUrl += \`&utm_medium=\${encodeURIComponent(utm_medium)}\`;
                }
                if (utm_campaign) {
                    whatsappUrl += \`&utm_campaign=\${encodeURIComponent(utm_campaign)}\`;
                }
                if (utm_content) {
                    whatsappUrl += \`&utm_content=\${encodeURIComponent(utm_content)}\`;
                }
                if (utm_term) {
                    whatsappUrl += \`&utm_term=\${encodeURIComponent(utm_term)}\`;
                }

                window.open(whatsappUrl, "_blank");
            });
          `,
        }}
      />
      
    </>
  );
}
