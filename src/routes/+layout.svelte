<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<nav>
    <a href="/">Basic Repro</a>
    <a href="without-remotes">Without Remotes</a>
    <a href="without-remotes-with-delay">Without remotes but with delay</a>
    <a href="only-mood">Remote functions but only one query</a>
    <a href="with-context">With context instead of search params</a>
    <a href="props">With props instead of context/search params</a>
</nav>

{@render children?.()}

<style>
    nav {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
