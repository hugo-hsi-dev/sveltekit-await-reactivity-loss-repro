<script>
    import { returnCount, returnDouble } from "./return-count.remote";

    let count = $state(0);
</script>

<div class="box">
    This is a minimal repro. The warning here is harmless as the async state
    from the query still updates as it's supposed to.
    <a href="/broken"
        >Click here for an example where this warning impacts the outcome of the
        query</a
    >
    <svelte:boundary>
        <div>Return Count: {await returnCount(count)}</div>
        <div>Return Double: {await returnDouble(count)}</div>
        {#snippet pending()}
            loading...
        {/snippet}
    </svelte:boundary>
    <button onclick={() => count++}>Increment</button>
</div>

<style>
    .box {
        border: 1px solid #000;
        border-radius: 8px;
        padding: 2rem;
    }
</style>
