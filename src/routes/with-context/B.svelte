<script lang="ts">
    import { getContext } from "svelte";
    import { getStatus } from "../getStatus";
    import { getWeather } from "../status.remote";

    const status = getContext("status");
</script>

<svelte:boundary>
    <h1>{await getWeather(status.value)}</h1>
    {#snippet pending()}
        loading...
    {/snippet}
</svelte:boundary>
