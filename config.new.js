let config = {
	address: "localhost",
	port: 8080,
	basePath: "/",
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
	useHttps: false,
	zoom: "1",
	httpsPrivateKey: "",
	httpsCertificate: "",
	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "MMM-GoogleCalendar",
			header: "Upcoming Calendar",
			position: "top_left",
			config: {
				fetchInterval: "60000",
				colored: "true",
				coloredText: "true",
				coloredSymbol: "true",
				maximumEntries: "25",
				tableClass: "small",
				calendars: [
					{
						symbol: "calendar",
						calendarID: "vrsidqatkurckm37crn4jvmkj4@group.calendar.google.com",
						color: "#225cba"
					}
				]
			}
		},
		{
			module: "MMM-GoogleCalendar",
			header: "Family Calendar",
			position: "top_center",
			config: {
				fetchInterval: "60000",
				colored: "true",
				coloredText: "true",
				coloredSymbol: "true",
				showLocation: "true",
				maximumEntries: "20",
				wrapEvents: "true",
				wrapLocationEvents: "true",
				tableClass: "xlarge",
				calendars: [
					{
						symbol: "calendar",
						calendarID: "vrsidqatkurckm37crn4jvmkj4@group.calendar.google.com",
						color: "#225cba"
					}
				]
			}
		},
		{
			module: "clock",
			position: "top_right",
			config: {
				timeFormat: "12",
				timezone: "America/Detroit",
				showPeriod: "true",
				showPeriodUpper: "false",
				showSunTimes: "true",
				showMoonTimes: "true",
				lat: "42.25065931604925",
				lon: "-83.67251376768756"
			}
		},
		{
			module: "weather",
			header: "today's weather - ",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				degreeLabel: "true",
				showPercipitationAmount: "true",
				showPercipitationProbability: "true",
				showSun: "true",
				lat: "42.25065931604925",
				lon: "-83.67251376768756"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				colored: "true",
				fadePoint: ".75",
				maxNumberOfDays: "7",
				ignoreToday: "true",
				lat: "42.25065931604925",
				lon: "-83.67251376768756"
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
