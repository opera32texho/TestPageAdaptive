var calendar_from = new SalsaCalendar({
    inputId: 'checkin',
    lang: 'en',
    range: {
      min: 'today'
    },
    calendarPosition: 'bot',
    fixed: false,
    connectCalendar: true
});

var calendar_to = new SalsaCalendar({
    inputId: 'checkout',
    lang: 'en',
    range: {
      min: 'today'
    },
    calendarPosition: 'bot',
    fixed: false
});
new SalsaCalendar.Connector({
    from: calendar_from,
    to: calendar_to,
    maximumInterval: 21,
    minimumInterval: 1
  });

new SalsaCalendar.NightsCalculator({
  from: calendar_from,
  to: calendar_to,
  nightsNo: 'nights-no'
});
