class AlarmClock {

    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error("error text")
        }

        if (this.alarmCollection.some(item => item.id === id)) {
            return console.error("Будильник уже существует")
        }

        let result = {
            id: id,
            time: time,
            callback: callback,
        }
        return this.alarmCollection.push(result);
    }

    removeClock(id) {
        return this.alarmCollection = this.alarmCollection.filter((item) => item.id != id);
    }

    getCurrentFormattedTime(){
        const data = new Date();
        let hour = data.getHours();
        let minute = data.getMinutes();     
        hour = (hour < 10) ? '0' + hour : hour;
        minute = (minute < 10) ? '0' + minute : minute;
        return (hour + ':' + minute)
       }

    start() {
        let checkClock = () => {
          this.alarmCollection.forEach(item => {
            if (item.time === this.getCurrentFormattedTime()) {
              return console.log(item.func())
            }
          })
        }
          const id = setInterval(checkClock, 60000);
          return this.timerId = id;
    }

    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach(item => console.log(item.id, item.time))
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    const clock = new AlarmClock();
  
    clock.addClock(
      "00:17",
      () => {
        console.log("Пора вставать");
      },
      1
    );
  
    clock.addClock(
      "00:18",
      () => {
        console.log("Уже нужно вставать");
        clock.removeClock(2);
      },
      2
    );
  
    clock.addClock(
      "00:19",
      () => {
        console.log("Подъем");
        clock.printAlarms();
        clock.clearAlarms();
      },
      3
    );
  
    clock.start();
  }
  
testCase();