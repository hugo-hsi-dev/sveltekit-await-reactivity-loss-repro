<script lang="ts">
    import { getStatus } from "../getStatus";

    export const getMood = async (status: boolean) => {
        // simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 300));
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
