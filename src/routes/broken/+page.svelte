<script lang="ts">
    import Double from "./double.svelte";
    import Single from "./single.svelte";

    let count = $state(0);
</script>

<div class="box">
    This example extracts the query calls into separate components. When you
    click the button, not only is the warning logged to the console, but the
    state also gets out of sync
    <a href="/">Click here to go back to the basic example</a>
    <Single {count} />
    <Double {count} />
    <button onclick={() => count++}>Increment</button>
</div>

<style>
    .box {
        border: 1px solid #000;
        border-radius: 8px;
        padding: 2rem;
    }
</style>
