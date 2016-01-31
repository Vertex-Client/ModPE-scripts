/*if you find a way not to use modTick this will work in servers.*/
var x = getPlayerX();
var y = getPlayerY();
var z = getPlayerZ();

function modTick(){
ModPE.showTipMessage("X:" + Math.round(x) + " Y:" + Math.round(y) + " Z:" + Math.round(z));
}
