<script lang="ts">
    import { getWeather } from "../status.remote";

    let { status }: { status: boolean } = $props();
</script>

<svelte:boundary>
    <h1>{await getWeather(status)}</h1>
    {#snippet pending()}
        loading...
    {/snippet}
</svelte:boundary>
