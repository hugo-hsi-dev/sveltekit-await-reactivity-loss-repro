<script>
    import A from "./A.svelte";
    import B from "./B.svelte";

    import { getStatus } from "../getStatus";
    const status = $derived(getStatus());
</script>

<A />
<B />
<a href="?status={!status.value}">Toggle Boolean</a>
