import { derived, writable } from "svelte/store";
import translations from "./translations";

//TODO: persist this on page reload
export const locale = writable("en");
export const locales = Object.keys(translations);

function translate(locale: string, key: string) {
    let text = translations[locale]
    key.split(".").forEach((key) => {
        text = text[key]
    })

    return text;
}

export const t = derived(locale, ($locale) => (key: string) =>
    translate($locale, key)
);