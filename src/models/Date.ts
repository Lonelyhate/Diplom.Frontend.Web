export class DateParse {
  private dateParse: Date;
  private months: string[] = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря"
  ];
  private year: string = "";
  private monthNumber: string = "";
  private monthName: string = "";
  private day: number;
  private hours: number;
  private minutes: number;

  constructor(date: string) {
    this.dateParse = new Date(date);
    this.day = this.dateParse.getDate();
    this.monthName = this.months[this.dateParse.getMonth()];
    this.hours = this.dateParse.getHours();
    this.minutes = this.dateParse.getMinutes();
  }

  GetDateWithIn() {
    return `${this.day} ${this.monthName} ${this.year} в ${this.hours}:${this.minutes}`;
  }
}

export default DateParse;
