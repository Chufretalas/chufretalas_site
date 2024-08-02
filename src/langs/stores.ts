import { derived, writable } from "svelte/store";
import translations from "./translations";
import { browser } from "$app/environment";

const initialValue = browser ? ["en", "pt-BR"].includes(navigator.language) ? navigator.language : "en" : "en"

export const locale = writable<"en" | "pt-BR">(initialValue as "en" | "pt-BR");
export const locales = Object.keys(translations);

function translate(locale: string, key: string) {
    let text = (translations as any)[locale]
    key.split(".").forEach((key) => {
        text = text[key]
    })

    return text;
}

export const t = derived(locale, ($locale) => (key: string) =>
    translate($locale, key)
);