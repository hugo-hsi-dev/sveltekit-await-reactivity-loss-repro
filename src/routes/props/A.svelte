<script lang="ts">
    import { getMood } from "../status.remote";

    let { status }: { status: boolean } = $props();
</script>

<svelte:boundary>
    <h1>{await getMood(status)}</h1>
    {#snippet pending()}
        loading...
    {/snippet}
</svelte:boundary>
