<script lang="ts">
    import { returnDouble } from "../return-count.remote";
    let { count }: { count: number } = $props();
</script>

<svelte:boundary>
    <div>Return Double: {await returnDouble(count)}</div>
    {#snippet pending()}
        loading...
    {/snippet}
</svelte:boundary>
