<script lang="ts">
    import { returnCount } from "../return-count.remote";

    let { count }: { count: number } = $props();
</script>

<svelte:boundary>
    <div>Return Count: {await returnCount(count)}</div>
    {#snippet pending()}
        loading...
    {/snippet}
</svelte:boundary>
