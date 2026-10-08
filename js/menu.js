/* ==========================================
   FATEBOUND - GAME MENU
   ========================================== */


const gameMenuButton =
    document.getElementById("gameMenuButton");

const gameMenuOverlay =
    document.getElementById("gameMenuOverlay");

const gameMenuCloseButton =
    document.getElementById("gameMenuCloseButton");

const gameMenuSettingsButton =
    document.getElementById("gameMenuSettingsButton");

const gameMenuSaveButton =
    document.getElementById("gameMenuSaveButton");

const gameMenuLobbyButton =
    document.getElementById("gameMenuLobbyButton");


function showGameMenuButton() {

    if (gameMenuButton) {
        gameMenuButton.classList.remove("hidden");
    }

}


function hideGameMenuButton() {

    if (gameMenuButton) {
        gameMenuButton.classList.add("hidden");
    }

    closeGameMenu();

}


function openGameMenu() {

    if (gameMenuOverlay) {
        gameMenuOverlay.classList.remove("hidden");
    }

}


function closeGameMenu() {

    if (gameMenuOverlay) {
        gameMenuOverlay.classList.add("hidden");
    }

}


if (gameMenuButton) {

    gameMenuButton.addEventListener(
        "click",
        openGameMenu
    );

}


if (gameMenuCloseButton) {

    gameMenuCloseButton.addEventListener(
        "click",
        closeGameMenu
    );

}


if (gameMenuOverlay) {

    gameMenuOverlay.addEventListener(
        "click",
        event => {

            if (event.target === gameMenuOverlay) {
                closeGameMenu();
            }

        }
    );

}


/* Settings intentionally does nothing for now. */

if (gameMenuSettingsButton) {

    gameMenuSettingsButton.addEventListener(
        "click",
        () => {
            closeGameMenu();
        }
    );

}


/* Save intentionally does nothing for now. */

if (gameMenuSaveButton) {

    gameMenuSaveButton.addEventListener(
        "click",
        () => {
            closeGameMenu();
        }
    );

}


if (gameMenuLobbyButton) {

    gameMenuLobbyButton.addEventListener(
        "click",
        () => {

            closeGameMenu();

            hideGameMenuButton();

            if (typeof resetCharacterStatus === "function") {
                resetCharacterStatus();
            }

            if (typeof resetFateDetails === "function") {
                resetFateDetails();
            }

            if (typeof resetStatPotential === "function") {
                resetStatPotential();
            }

            if (typeof resetCharacterCreation === "function") {
                resetCharacterCreation();
            }

            showLobby();

        }
    );

}
