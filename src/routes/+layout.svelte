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
</nav>

{@render children?.()}
