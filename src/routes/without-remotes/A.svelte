<script lang="ts">
    import { getStatus } from "../getStatus";

    export const getMood = async (status: boolean) => {
        if (status) {
            return "Happy";
        }
        return "Sad";
    };

    const status = $derived(getStatus());
</script>

<svelte:boundary>
    <h1>{await getMood(status.value)}</h1>
    {#snippet pending()}
        loading...
    {/snippet}
</svelte:boundary>
