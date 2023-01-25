/*=============================================
=            Driver Data Interfaces            =
=============================================*/

export interface IDriver {
	driverId: string;
	permanentNumber?: string;
	code?: string;
	url: string;
	givenName: string;
	familyName: string;
	dateOfBirth: string;
	nationality: string;
}

export interface IDriverStandings {
	position: string;
	positionText: string;
	points: string;
	wins: string;
	Driver: IDriver;
	Constructors: IConstructor[];
}

/*=====  End of Driver Data Interfaces  ======*/

/*=============================================
=            Race Data Interfaces            =
=============================================*/

export interface IRace {
	season: string;
	round: string;
	url: string;
	raceName: string;
	Circuit: ICircuit;
	date: string;
	time: string;
	FirstPractice: {
		date: string;
		time: string;
	};
	SecondPractice: {
		date: string;
		time: string;
	};
	ThirdPractice: {
		date: string;
		time: string;
	};
	Qualifying: {
		date: string;
		time: string;
	};
}

/*=====  End of Race Data Interfaces  ======*/

/*=============================================
=            Season Data Interfaces            =
=============================================*/

export interface ISeason {
	season: string;
	url: string;
}

/*=====  End of Season Data Interfaces  ======*/

/*=============================================
=            Constructor Data Interfaces            =
=============================================*/

export interface IConstructor {
	constructorId: string;
	url: string;
	name: string;
	nationality: string;
}

export interface IConstructorStandings {
	position: string;
	positionText: string;
	points: string;
	wins: string;
	Constructor: IConstructor;
}

/*=====  End of Constructor Data Interfaces  ======*/

/*=============================================
=            Circuit Data Interfaces            =
=============================================*/

export interface ICircuit {
	circuitId: string;
	url: string;
	circuitName: string;
	Location: {
		lat: string;
		long: string;
		locality: string;
		country: string;
	};
}

/*=====  End of Circuit Data Interfaces  ======*/

/*=============================================
=            Race Results Interfaces            =
=============================================*/

export interface IResult {
	number: string;
	position: string;
	positionText: string;
	points: string;
	Driver: IDriver;
	Constructor: IConstructor;
	grid: string;
	laps: string;
	status: string;
	Time: {
		millis: string;
		time: string;
	};
	FastestLap: {
		rank: string;
		lap: string;
		Time: {
			time: string;
		};
		AverageSpeed: {
			units: string;
			speed: string;
		};
	};
}

/*=====  End of Race Results Interfaces  ======*/
