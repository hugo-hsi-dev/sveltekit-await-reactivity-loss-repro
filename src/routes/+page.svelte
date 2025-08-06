<script>
    import Counter from "./counter.svelte";
</script>

<svelte:boundary>
    <Counter />
    {#snippet pending()}
        loading...
    {/snippet}
</svelte:boundary>
