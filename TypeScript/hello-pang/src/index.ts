interface Calendar {
  name: string;
  addEvent(event: any): void;
  removeEvent(event: any): void;
}

// 接口继承，CloudCalendar包含Calendar的所有属性和方法
interface CloudCalendar extends Calendar {
  sync(): void;
}

// 实现接口
class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    console.log(`Adding event to Google Calendar`);
  }

  removeEvent(): void {
    console.log(`Removing event from Google Calendar`);
  }
}
