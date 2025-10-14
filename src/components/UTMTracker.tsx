"use client";

import { useEffect } from "react";

export default function UTMTracker() {
  useEffect(() => {
    const url = new URL(window.location.href);

    const utm_source = url.searchParams.get("utm_source") || "";
    const utm_medium = url.searchParams.get("utm_medium") || "";
    const utm_campaign = url.searchParams.get("utm_campaign") || "";
    const utm_content = url.searchParams.get("utm_content") || "";

    const setHiddenField = (form: HTMLFormElement, name: string, value: string) => {
      const existingInput = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
      if (existingInput) {
        existingInput.value = value;
      } else {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.prepend(input);
      }
    };

    setTimeout(() => {
      document.querySelectorAll("form").forEach((form) => {
        const f = form as HTMLFormElement;
        setHiddenField(f, "utm_source", utm_source);
        setHiddenField(f, "utm_medium", utm_medium);
        setHiddenField(f, "utm_campaign", utm_campaign);
        setHiddenField(f, "utm_content", utm_content);
      });
    }, 300);
  }, []);

  return null;
}
