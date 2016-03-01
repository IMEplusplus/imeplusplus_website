function load_calendar() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyBdmrqQtkPATxC8KsS1ji2C9bfEmiEqeAA',
        eventSources: [
            {
                googleCalendarId: '1kijfetv9of5gbjt80obj5i1u0@group.calendar.google.com',
                color: '#000066',
            },
            {
                googleCalendarId: 'o27mcut1k2i700dt5t5v1i0o84@group.calendar.google.com',
                color: '#CC0000',
            },
            {
                googleCalendarId: 'o0bkduioq07c76n27lrgb37ilc@group.calendar.google.com',
                color: '#336600',
            },
        ],
        aspectRatio: NaN,
    });
};
