<script>
    import A from "./A.svelte";
    import B from "./B.svelte";

    import { getStatus } from "../getStatus";
    const status = $derived(getStatus());
    let boolean = $state(false);
</script>

<A />
<B />
<a href="?status={!status.value}">Toggle Boolean</a>
