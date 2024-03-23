import { mainContainer } from "./main_container";
import { sectionCardsContainer } from "./section_cards";

// Создаем и Работаем с MAIN
export const main = document.createElement('main');

// MAIN is ready, Добавляем mainContainer в MAIN 
// Добавляем sectionCardsContainer в MAIN 
main.append(mainContainer, sectionCardsContainer);