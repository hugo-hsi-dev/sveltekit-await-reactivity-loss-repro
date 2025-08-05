<script lang="ts">
    import { getStatus } from "./getStatus";
    import { getWeather } from "./status.remote";

    const status = $derived(getStatus());
</script>

<svelte:boundary>
    <h1>{await getWeather(status.value)}</h1>
    {#snippet pending()}
        loading...
    {/snippet}
</svelte:boundary>
