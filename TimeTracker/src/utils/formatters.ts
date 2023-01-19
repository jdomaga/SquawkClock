export function dayFromDate( dateTime: Date): string {
    let date: string[] =  dateTime.toISOString().split('T');
    date = date[0].split('-');
    date = date.reverse();
    return date.join('/')
}