var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var modpeFolder = ctx.getDir("ModPE", 0);
var modpeFile = new java.io.File(modpeFolder, "ModName.js");

var start = false;

if(start)refresh();

function refresh(){
net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(ModName.js, true);
net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(ModName.js, false);
}
