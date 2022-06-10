"use strict";
const eventAnticipated = document.querySelector("input");

function addingEventListener() {
  eventAnticipated.addEventListener("click", function (event) {
    return "i have been pressed";
  });
}
