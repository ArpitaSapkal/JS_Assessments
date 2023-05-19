function businessHours(dayNumber, hourNumber){
    const openingHour=9;
    const closingHour=18;
    if(dayNumber>=1 && dayNumber<=7 && hourNumber<=23){
        if(hourNumber>=openingHour && hourNumber<=closingHour){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}
console.log(businessHours(2,10));
console.log(businessHours(7,25));
console.log(businessHours(2,25));

function getDayNumber( janFirstDayNumber, yearDayNumber){
    const dayNumber=(janFirstDayNumber+yearDayNumber)%7;
    return dayNumber;
}
console.log(getDayNumber(6,250));
console.log(getDayNumber(3,165));
console.log(getDayNumber(1,360));

function isBusinessHour(yearDayNumber,hourNumber){
    const janFirstDayNumber=1;
    const dayNumber=getDayNumber(janFirstDayNumber, yearDayNumber);
    const businessHourChcek=businessHours(dayNumber,hourNumber);
    return businessHourChcek;
}
console.log(isBusinessHour(100,10));