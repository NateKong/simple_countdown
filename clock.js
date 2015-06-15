/**************
 * Simple JS application
 * for countdown
 *************/

//Every second (1000 milliseconds) run the function GetClock
setInterval(GetClock,1000);

//sets the date: year 2020, month November (January starts at 0), day 21, time 16:30 (4:30 PM)
var date = new Date(2020, 10, 21, 16, 30);

/************Clock Function************/
function GetClock()
{
	//current date
	var now = new Date();
	//time remaining in seconds
	var left = ( date.getTime() - now.getTime() ) / 1000;
	
	//calculation of time breakdown
	var wk = parseInt(left / 604800);
	left = left % 604800;
	var day = parseInt(left / 86400);
	left = left % 86400;
	var hr = parseInt(left / 3600);
	left = left % 3600;
	var min = parseInt(left / 60);
	sec = parseInt(left % 60);
		
	//send to id's
	document.getElementById('now').innerHTML = now.toString();
	document.getElementById('date').innerHTML = date.toString();
	document.getElementById('wk').innerHTML = wk;
	document.getElementById('day').innerHTML = day;
	document.getElementById('hr').innerHTML = hr;
	document.getElementById('min').innerHTML = min;
	document.getElementById('sec').innerHTML = sec;
}