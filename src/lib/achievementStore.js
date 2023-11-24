import achievementsJson from "../assets/achievements.json";
import { writable, readable, derived } from "svelte/store";

export const search = writable("");
export const allAchievements = readable(achievementsJson);
export const selectedAchievements = writable([]);
export const searchReversed = writable(false);
export const symbolsFlipped = writable(false);
export const filteredAchievements = derived([ allAchievements, selectedAchievements, search, searchReversed ], ([ $allAchievements, $selectedAchievements, $search, $searchReversed ]) => {
    const achievements = $allAchievements.filter(achievement => !$selectedAchievements.includes(achievement));
    if ($search === '') {
        return achievements;
    }

    if ($searchReversed) {
        return achievements.filter(achievement => achievement.text.toLowerCase().includes($search.toLowerCase().split('').reverse().join('')));
    }

    return achievements.filter(achievement => achievement.text.toLowerCase().includes($search.toLowerCase()));
});


export const toggleSelectAchievement = (achievement) => {
    selectedAchievements.update(currAchievements => {
        if (currAchievements.includes(achievement)) {
            return currAchievements.filter(a => a !== achievement);
        } else {
            return [ ...currAchievements, achievement ];
        }
    });
}

/**
 * 
 * @param {string} value The string char to append to the search store
 */
export const appendToSearch = (value) => {
    search.update((search) => search + value);
}

/**
 * Clears the search store
 */
export const clearSearch = () => {
    search.set("");
}

export const toggleReverseSearch = () => {
    searchReversed.update((reversed) => !reversed);
}

export const toggleSymbolsFlipped = () => {
    symbolsFlipped.update((flipped) => !flipped);
}
