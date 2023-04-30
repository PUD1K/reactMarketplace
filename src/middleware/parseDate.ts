interface ICalendar{
    0: string,
    1: string,
    2: string,
    3: string,
    4: string,
    5: string,
    6: string,
    7: string,
    8: string,
    9: string,
    10: string,
    11: string,
}

export const parseDate = (date: string): string => {
    const calendar: ICalendar = {
        0: 'Января',
        1: 'Февраля',
        2: 'Марта',
        3: 'Апреля',
        4: 'Мая',
        5: 'Июня',
        6: 'Июля',
        7: 'Августа',
        8: 'Сентября',
        9: 'Октября',
        10: 'Ноября',
        11: 'Декабря',
    }

    const year = date.substring(0,4);
    const monthNum = date.substring(5,7);
    let month = '';
    if(monthNum[0] === '0')
        month = calendar[monthNum[1] as unknown as keyof ICalendar];
    else    
        month = calendar[monthNum as unknown as keyof ICalendar];

    const day = date.substring(8,10);

    return `${day} ${month} ${year}`
}