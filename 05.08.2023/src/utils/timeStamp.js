export const generAteTime = () => {
    // Получаем текущую дату и время
    const currentDate = new Date();

    // Устанавливаем время начала дня в 00:00:00
    const startTime = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        0,
        0,
        0
    ).getTime();

    // Устанавливаем время окончания дня в 23:59:59
    const endTime = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        23,
        59,
        59
    ).getTime();

    // Создаем массив интервалов в 5 минут
    const intervals = [];
    let currentTime = startTime;

    while (currentTime <= endTime) {
        intervals.push(currentTime);
        currentTime += 5 * 60 * 1000; // Прибавляем 5 минут в миллисекундах
    }
    
    return intervals
};