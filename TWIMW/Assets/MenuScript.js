#pragma strict

function Start () {
}

function Update () {

}

function OnGUI () {
	this.guiTexture.pixelInset = Rect (Screen.width - Screen.width/3, 0, Screen.width/3, Screen.height);
}