const rickAndMortySearchPlaceholders:string[] = [
  "Искать портал...",
  "Где мой Морти?",
  "Найти Рика...",
  "Искать клонов...",
  "Портал в другую реальность...",
  "Искать Смерть...",
  "Найти Мистера Мезекиса...",
  "Искать приключения...",
  "Где бесконечные миры?",
  "Искать безумие..."
];

export const getRandomText = ():string => {  
    const randomIndex = Math.floor(Math.random() * rickAndMortySearchPlaceholders.length);  

    return rickAndMortySearchPlaceholders[randomIndex];  
};