<script lang="ts">
    import { getContext } from "svelte";
    import { getStatus } from "../getStatus";
    import { getMood } from "../status.remote";

    const status = getContext("status");
</script>

<svelte:boundary>
    <h1>{await getMood(status.value)}</h1>
    {#snippet pending()}
        loading...
    {/snippet}
</svelte:boundary>
