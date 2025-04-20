abstract class CalendarClass {
  constructor(public name: string) {}
  abstract addEvent(event: any): void;
  abstract removeEvent(event: any): void;
}
interface Calendar {
  name: string;
  addEvent(event: any): void;
  removeEvent(event: any): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}
  addEvent(event: any): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(event: any): void {
    throw new Error("Method not implemented.");
  }
}
