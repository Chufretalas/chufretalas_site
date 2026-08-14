# Chufretalas Site

**MY PERSONAL WEBSITE 🥳🥳**

A place to send anyone who wants to know more about my work. 
 
Expect the usual business stuff, such as a projects page, a personal introduction and stuff like that, but also all my other litte experiments that need a place to live.

## Dev notes

### Adding New Translations

This project uses `typesafe-i18n` for internationalization. To add new text:

1.  **Define the key** in `src/i18n/en/index.ts` (base lang).
2.  **Add the translation** in `src/i18n/pt-BR/index.ts` (TypeScript will flag missing keys as errors).
3.  **Run the watcher** (if not already running) with `npm run typesafe-i18n` to generate the new types.
4.  **Use it** in Svelte components:
    ```svelte
    <script>
        import LL from "$i18n/i18n-svelte";
    </script>

    <h1>{$LL.your_key()}</h1>
    ```
