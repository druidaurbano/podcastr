export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600)/60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))     //padSart adicion o 0 quando faltarem dígitos para completarem 2 dígitos em unit, ou seja, 1 hora vira 01 hora
        .join (':')

        return timeString;
}