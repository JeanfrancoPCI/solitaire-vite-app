import html from "./menu-buttons.html?raw";

export const renderMenuButtons = ( element ) => {
    element.innerHTML = html;
}