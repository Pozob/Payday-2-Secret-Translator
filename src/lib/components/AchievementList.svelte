<script>
    import { toggleSelectAchievement } from '../achievementStore';

    export let achievementsToRender = [];
</script>

<div class="achievements-wrapper">
    {#each achievementsToRender as achievement (achievement.name)}
        <button class="achievement" on:click={() => toggleSelectAchievement(achievement)}>
            <div class="achievement-name">{achievement.name}</div>
            <div class="achievement-description">{achievement.text}</div>
        </button>
    {/each}
</div>

<style>
    .achievements-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .achievement {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        max-width: 18rem;
        border-radius: 0.25rem;
        margin: 0.25rem;
    }
    .achievement-name {
        font-size: 1.5em;
        font-weight: bold;
    }
</style>
