<script lang="ts">
    import { setContext } from "svelte";
    import A from "./A.svelte";
    import B from "./B.svelte";
    let status = $state({ value: false });
    setContext("status", status);
</script>

<A />
<B />
<button onclick={() => (status.value = !status.value)}>Toggle Status</button>
