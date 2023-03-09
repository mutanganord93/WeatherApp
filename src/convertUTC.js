export const convertUTC = (myTimezone, dt) => {
  let weekDay = {
    weekday: "long",
    timeZone: myTimezone,
  };
  let dayTime = new Date(dt * 1000);

  let myDay = new Intl.DateTimeFormat("en-US", weekDay).format(dayTime);

  let hourDay = {
    hour: "numeric",
    minute: "numeric",
    timeZone: myTimezone,
  };
  let hourTime = new Date(dt * 1000);
  let myHour = new Intl.DateTimeFormat("en-US", hourDay).format(hourTime);

  let fullDate = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: myTimezone,
  };

  let sunTime = new Date(dt * 1000);
  let mySun = new Intl.DateTimeFormat("en-US", fullDate).format(sunTime);
  // return [sunrise,sunset];

  let dateData = {
    day: myDay,
    hour: myHour,
    sun: mySun,
  };

  return dateData;
};

