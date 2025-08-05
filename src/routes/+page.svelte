<script>
    import { page } from "$app/state";
    import A from "./A.svelte";
    import B from "./B.svelte";
    import { getStatus } from "./getStatus";
    const status = $derived(getStatus());
</script>

Open the console and click the link below

<A />
<B />
<a href="?status={!status.value}">Toggle Status</a>
