<script lang="ts">
    import "../reset.css"
    import "../global.css"
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Navbar />
<slot></slot>
<Footer />