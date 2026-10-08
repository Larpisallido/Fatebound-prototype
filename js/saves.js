/* ==========================================
   FATEBOUND - SAVE SYSTEM
   ========================================== */


/*
 * Save system foundation.
 *
 * The actual save/load behavior is intentionally
 * disabled for now. The utility functions remain
 * available so the real save system can be added
 * later without changing the rest of the game.
 */

const SAVE_KEY = "fatebound_save";


/* ==========================================
   SAVE GAME
   ========================================== */

function saveGame(gameData) {

    // Saving is intentionally disabled for now.
    return false;

}


/* ==========================================
   LOAD GAME
   ========================================== */

function loadGame() {

    // Loading is intentionally disabled for now.
    return null;

}


/* ==========================================
   CHECK FOR SAVE
   ========================================== */

function hasSave() {

    return false;

}


/* ==========================================
   SAVED GAME LIST
   ========================================== */

function getSavedGames() {

    // The list is intentionally empty until
    // the real save system is implemented.
    return [];

}


/* ==========================================
   RENDER SAVED GAMES
   ========================================== */

function renderSavedGames() {

    const savedGamesList =
        document.getElementById("savedGamesList");

    if (!savedGamesList) {
        return;
    }


    const savedGames =
        getSavedGames();


    savedGamesList.innerHTML = "";


    if (savedGames.length === 0) {

        const emptyMessage =
            document.createElement("p");

        emptyMessage.className =
            "saved-games-empty";

        emptyMessage.textContent =
            "No saved adventures yet.";

        savedGamesList.appendChild(
            emptyMessage
        );

        return;

    }


    savedGames.forEach(save => {

        const saveButton =
            document.createElement("button");

        saveButton.className =
            "menu-button saved-game-button";

        saveButton.type = "button";

        saveButton.textContent =
            save.name || "Unnamed Adventure";

        savedGamesList.appendChild(
            saveButton
        );

    });

}
