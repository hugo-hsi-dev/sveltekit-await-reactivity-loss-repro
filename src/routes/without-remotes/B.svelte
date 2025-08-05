<script lang="ts">
    import { getStatus } from "../getStatus";

    export const getWeather = async (status: boolean) => {
        if (status) {
            return "Sunny";
        }
        return "Rainy";
    };

    const status = $derived(getStatus());
</script>

<svelte:boundary>
    <h1>{await getWeather(status.value)}</h1>
    {#snippet pending()}
        loading...
    {/snippet}
</svelte:boundary>
