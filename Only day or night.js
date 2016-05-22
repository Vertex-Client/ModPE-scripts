var day = false;
var night = false;

function chatReceiveHook(str, sender) {
	if(str=="OnlyDay")day = true;
	if(str=="OnlyNight")night = true;
}

function modTick() {
if(day)Level.setTime(0);
if(night)Level.setTime(15000);
}
