export default function converHourToMinutes(time:string){
    const [hour,minutes] = time.split(':').map(Number);
    return hour*60 + minutes;
}
 export function converMinutestoHour(time: number) {
	const hour = Math.floor(time/60);
	const minutes = time%60;
	 return `${("0" + hour).slice(-2)}:${("0" + minutes).slice(-2)}`;
}