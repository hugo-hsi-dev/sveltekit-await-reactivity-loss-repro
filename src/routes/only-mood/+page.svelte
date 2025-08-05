<script>
    import { page } from "$app/state";
    import A from "./A.svelte";
    import { getStatus } from "../getStatus";
    const status = $derived(getStatus());
</script>

<A />
<a href="?status={!status.value}">Toggle Status</a>
