<script lang="ts">
    import { setContext } from "svelte";
    import A from "./A.svelte";
    import B from "./B.svelte";
    let status = $state(false);
</script>

<A {status} />
<B {status} />
<button onclick={() => (status = !status)}>Toggle Status</button>
