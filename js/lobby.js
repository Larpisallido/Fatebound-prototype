/* ==========================================
   FATEBOUND - LOBBY
   ========================================== */


/* ==========================================
   BUTTONS
   ========================================== */

const newGameButton =
    document.getElementById("newGameButton");

const continueButton =
    document.getElementById("continueButton");

const settingsButton =
    document.getElementById("settingsButton");

const fateboundModeButton =
    document.getElementById("fateboundModeButton");

const classicModeButton =
    document.getElementById("classicModeButton");

const newGameBackButton =
    document.getElementById("newGameBackButton");

const continueBackButton =
    document.getElementById("continueBackButton");


/* ==========================================
   NEW GAME
   ========================================== */

if (newGameButton) {

    newGameButton.addEventListener(
        "click",
        showNewGame
    );

}


/* ==========================================
   NEW GAME BACK
   ========================================== */

if (newGameBackButton) {

    newGameBackButton.addEventListener(
        "click",
        showLobby
    );

}


/* ==========================================
   FATEBOUND MODE
   ========================================== */

if (fateboundModeButton) {

    fateboundModeButton.addEventListener(
        "click",
        () => {

            /*
             * Selecting Fatebound officially
             * starts the campaign.
             */

            if (
                typeof startFateboundCreation ===
                "function"
            ) {

                startFateboundCreation();

            }

        }
    );

}


/* ==========================================
   CLASSIC MODE
   ========================================== */

if (classicModeButton) {

    classicModeButton.addEventListener(
        "click",
        () => {

            alert(
                "Classic Mode is currently a Work in Progress."
            );

        }
    );

}


/* ==========================================
   CONTINUE
   ========================================== */

if (continueButton) {

    continueButton.addEventListener(
        "click",
        () => {

            renderSavedGames();

            showContinue();

        }
    );

}


/* ==========================================
   CONTINUE BACK
   ========================================== */

if (continueBackButton) {

    continueBackButton.addEventListener(
        "click",
        showLobby
    );

}


/* ==========================================
   SETTINGS
   ========================================== */

if (settingsButton) {

    settingsButton.addEventListener(
        "click",
        () => {

            alert(
                "Settings will be added later."
            );

        }
    );

}
