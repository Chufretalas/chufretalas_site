<script lang="ts">
    import "../reset.css";
    import "../global.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { loadAllLocales } from "$i18n/i18n-util.sync";
    import { locale, setLocale } from "$i18n/i18n-svelte";
    import { browser } from "$app/environment";
    import type { Snapshot } from "./$types";

    loadAllLocales();

    if (browser && !$locale) {
        const initialValue = ["en", "pt-BR"].includes(navigator.language) ? navigator.language : "en";
        setLocale(initialValue as any);
    }

    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();

    export const snapshot: Snapshot<"en" | "pt-BR"> = {
        capture: () => $locale,
        restore: (value) => setLocale(value),
    };
</script>

<Navbar />
{@render children?.()}
<Footer />
