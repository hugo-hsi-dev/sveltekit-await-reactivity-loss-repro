<script lang="ts">
    import { getStatus } from "./getStatus";
    import { getMood } from "./status.remote";

    const status = $derived(getStatus());
</script>

<svelte:boundary>
    <h1>{await getMood(status.value)}</h1>
    {#snippet pending()}
        loading...
    {/snippet}
</svelte:boundary>
