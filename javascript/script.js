const NewGame = document.getElementById("new-game");
const GameIndexMenu = document.getElementById("game-index-menu");
const GameContainer = document.getElementById("game-container");

NewGame.addEventListener("click", () => {
  GameContainer.classList.add("server-room");
  GameIndexMenu.style.display = "none";
});
