export const timeToDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000); // Перетворюємо таймстемп в мілісекунди

    // Отримуємо значення годин і хвилин
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Отримуємо значення дня, місяця та року
    const day = date.getDate();
    const month = date.getMonth() + 1; // Місяці починаються з 0
    const year = date.getFullYear();

    // Форматуємо дату та час у вигляді "гг:хх дд.мм.рррр"
    const formattedDateTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes} ${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;

    return formattedDateTime;
  };
