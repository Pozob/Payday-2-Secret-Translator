<script>
    import { selectedAchievements, filteredAchievements } from './lib/achievementStore.js';
    import AchievementList from './lib/components/AchievementList.svelte';
    import Characters from './lib/components/Characters.svelte';
    import ClearButton from './lib/components/ClearButton.svelte';
    import FlipSymbolsButton from './lib/components/FlipSymbolsButton.svelte';
    import ReverseButton from './lib/components/ReverseButton.svelte';
    import SearchBar from './lib/components/SearchBar.svelte';

    function generateExport() {
        const data = $selectedAchievements
            .map(achievement => {
                return achievement.name;
            })
            .join('\n');

        const dataStr = 'data:text/plain;charset=utf-8,' + encodeURIComponent(data);
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute('href', dataStr);
        downloadAnchorNode.setAttribute('download', 'payday2_todo_list.txt');
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
</script>

<div class="App container">
    <h2>PayDay 2 Secret Translator</h2>
    <div class="input-wrapper">
        <SearchBar />
        <div class="control-buttons">
            <div class="buttons">
                <ClearButton />
                <FlipSymbolsButton />
                <ReverseButton />
            </div>
        </div>
    </div>
    <Characters />
    <div class="list-header">
        <span class="found-achievements">Found <b>{$filteredAchievements.length}</b> Achievements</span>
        <button class="btn btn-success" on:click={generateExport}> Download ToDo List </button>
        <span class="found-achievements">Currently <b>{$selectedAchievements.length}</b> Achievements selected</span>
    </div>
    <div class="output-wrapper row">
        <div class="achievement-list">
            <h5>Click on an achievement to add it to the ToDo List</h5>
            <AchievementList achievementsToRender={$filteredAchievements} />
        </div>
        <div class=" todo-list">
            <h5>Click on an achievement to remove it from the ToDo List</h5>
            <AchievementList achievementsToRender={$selectedAchievements} />
        </div>
    </div>
</div>

<style>
    .output-wrapper {
        margin-top: 1rem;
        display: flex;
    }

    .achievement-list,
    .todo-list {
        width: 50%;
    }

    .buttons {
        margin: 0.5rem;
    }
</style>
