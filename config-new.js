let config = {
	address: "localhost",
	zoom: .85,
	port: 8080,
	basePath: "/",
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
	useHttps: false,
	httpsPrivateKey: "",
	httpsCertificate: "",
	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"], // Add "DEBUG" for even more logging
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

		/* lets see if I can make this look or function like agenda */
		{
			module: "MMM-GoogleCalendar",
			header: "Today's Calendar",
			position: "top_center",
			config: {
				fetchInterval: "60000",
				broadcastPastEvents: true,
				broadcastEvents: true,
				colored: true,
				coloredText: true,
				coloredSymbol: true,
				maximumNumberOfDays: "1",
				displaySymbol: false,
				showLocation: true,
				showEnd: true,
				wrapEvents: true,
				fadePoint: ".95",
				tableClass: "small",
				calendars: [
					{
						name: "family",
						symbol: "calendar",
						calendarID: "vrsidqatkurckm37crn4jvmkj4@group.calendar.google.com",
						color: "#225cba"
					},
					{
						name: "matt",
						symbol: "calendar",
						calendarID: "mclanem@umich.edu",
						color: "#07bb09",
					}
				]
			}
		},

		{
			module: "MMM-GoogleCalendar",
			header: "Upcoming Calendar",
			position: "top_center",
			config: {
				fetchInterval: "60000",
				broadcastPastEvents: true,
				broadcastEvents: true,
				colored: true,
				coloredText: true,
				coloredSymbol: true,
				maximumNumberOfDays: "14",
				displaySymbol: false,
				showLocation: true,
				wrapEvents: true,
				fadePoint: ".95",
				tableClass: "small",
				calendars: [
					{
						name: "family",
						symbol: "calendar",
						calendarID: "vrsidqatkurckm37crn4jvmkj4@group.calendar.google.com",
						color: "#225cba"
					},
					{
						name: "matt",
						symbol: "calendar",
						calendarID: "mclanem@umich.edu",
						color: "#07bb09",
					}
				]
			}
		},

		/*
		Need to replace this with something that we can share and that will schedule tasks to be created at a specific time.
		Maybe todoist?
		{
    			module: "MMM-GoogleTasks",
    			// header: "Google Tasks",
    			position: "top_center",
   			config: {
        			listID: "MHNKejVTei1WOE41REJlWA",
				tableClass: "medium"
    			}
		},
		*/

		
		{
  			module: "MMM-CalendarExt3Agenda",
  			position: "top_center",
  			header: "Agenda",
  			config: {
					instanceId: "today",
    					locale: 'en-US',
					showMiniMonthCalendar: false,
    					firstDayOfWeek: 1,
    					startDayIndex: 0,
					endDayIndex: 1,
    					//calendarSet: ['family', 'matt'],
  				}
		},
		
		/*
		I want this to work but it wasn't before... 
		{
  			module: "MMM-CalendarExt3Timeline",
  			position: "top_center",
			header: "Timeline",
			config: {
				/*locale: 'en-US',
    				staticMode: true,
    				beginHour: -3,
    				hourLength: 12,
    				useSymbol: true,
    				displayLegend: true,
				preProcessor: (e) => {
  				  e.startDate = new Date(e.start?.date || e.start?.dateTime).valueOf()
  				  e.endDate = new Date(e.end?.date || e.end?.dateTime).valueOf()
  				  e.title = e.summary
  				  e.fulldayEvent = (e.start?.date) ? true : false
  				  return e
				}
			}
		}, */

		// Top Right Section
		{
			module: "clock",
			position: "top_right",
			config: {
				timeFormat: "12",
				timezone: "America/Detroit",
				showPeriod: true,
				showPeriodUpper: false,
				showSunTimes: true,
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
				degreeLabel: true,
				showPercipitationAmount: true,
				showPercipitationProbability: true,
				showSun: true,
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
				colored: true,
				fadePoint: ".75",
				maxNumberOfDays: "7",
				ignoreToday: true,
				lat: "42.25065931604925",
				lon: "-83.67251376768756"
			}
		},



		{
      			module: "MMM-Moon",
			// Can we change the time to a 12 hour clock instead of 24?
      			position: "bottom_right",
      			config: {
					lat: 42.251,
                    lon: -83.673,
        			timezone: "America/Detroit"
      			}
    		},
		
		{
    			module: "MMM-BirdOfTheDay",
    			position: "bottom_left",
    			config: {
        			apiKey: "e3aa03e2-b994-4fb2-91ce-fa81da799369", // Replace with your Nuthatch API key
        			rotation: "Daily", // Options: "Hourly", "Daily", "Weekly"
        			imageWidth: "100px", // Customize the image size
        			fontSize: "medium", // Font size for text
        			textPosition: "below", // Options: "below", "left", "right"
        			showTitleLine: true, // Show/hide line under title
        			maxHistory: 50, // Number of birds to track before repeating
        			showName: true, // Display the bird's common name
        			showSciName: true, // Show the scientific name
        			showRegion: true, // Display the region(s)
        			showStatus: true, // Show conservation status
    			},
		},
		/*
		{
    			module: "MMM-quote-of-the-day",
    			position: "bottom_bar",
    			config: {
        			language: "en",
        			updateInterval: "1d"
			}
		}*/
		{
           		module: 'MMM-History',
          		position: 'bottom_bar',
          		config: {
        			maxWidth: "100%"
				// maxWidth: "300px"  // Increase to maximum px or 100% to stretch across mirror. See Examples above.
          		}
    		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
