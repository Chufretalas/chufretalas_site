<script lang="ts">
    import "../reset.css";
    import "../global.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { locale } from "$langs/stores";
    import type { Snapshot } from "./$types";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();

    export const snapshot: Snapshot<string> = {
        capture: () => $locale,
        restore: (value) => ($locale = value),
    };
</script>

<Navbar />
{@render children?.()}
<Footer />
