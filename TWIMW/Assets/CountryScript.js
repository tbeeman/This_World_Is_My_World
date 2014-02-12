#pragma strict

var name: String;
var ID: int;
var player: GameObject;

var armyCount: int;

var neighbors: Array = new Array();
var neighborA: GameObject;
var neighborB: GameObject;
var neighborC: GameObject;
var neighborD: GameObject;
var neighborE: GameObject;
var neighborF: GameObject;

function Start () {
	if (neighborA != null) {
		neighbors.Add(neighborA);
	}
	if (neighborB != null) {
		neighbors.Add(neighborB);
	}
	if (neighborC != null) {
		neighbors.Add(neighborC);
	}
	if (neighborD != null) {
		neighbors.Add(neighborD);
	}
	if (neighborE != null) {
		neighbors.Add(neighborE);
	}
	if (neighborF != null) {
		neighbors.Add(neighborF);
	}

	if (player.tag != "NotPlaying") {
		player.GetComponent(PlayerScript).AddCountry(this.gameObject);
		
		var color: Color;
	      		
		if (player.tag == "Red"){
			color = Vector4(0.5, 0, 0, 1);
		} else if (player.tag == "Orange"){
			color = Vector4(1, 0.5, 0, 1);
		} else if (player.tag == "Green"){
			color = Vector4(0, 0.5, 0, 1);
		} else if (player.tag == "Blue"){
			color = Vector4(0, 0.5, 1, 1);
		} else if (player.tag == "Purple"){
			color = Vector4(0.5, 0, 1, 1);
		} else {
			color = Color.gray;
		}
		
		var brightness: float;
		
		if (this.gameObject.tag == "Dark"){
			brightness = 0.0;
		} else if (this.gameObject.tag == "DarkMid"){
			brightness = 0.1;
		} else if (this.gameObject.tag == "LightMid"){
			brightness = 0.2;
		} else {
			brightness = 0.3;
		}
		
		color = ConvertColor(color, brightness);
		this.gameObject.renderer.material.color = color;
	}
}

function Update () {
}

function ChangePlayer (new_player: GameObject) {
	if (player != new_player) {
		player.GetComponent(PlayerScript).RemoveCountry(this.gameObject);
		player = new_player;
		player.GetComponent(PlayerScript).AddCountry(this.gameObject);
		
		var color: Color;
	      		
		if (player.tag == "Red"){
			color = Vector4(0.5, 0, 0, 1);
		} else if (player.tag == "Orange"){
			color = Vector4(1, 0.5, 0, 1);
		} else if (player.tag == "Green"){
			color = Vector4(0, 0.5, 0, 1);
		} else if (player.tag == "Blue"){
			color = Vector4(0, 0.5, 1, 1);
		} else if (player.tag == "Purple"){
			color = Vector4(0.5, 0, 1, 1);
		} else {
			color = Color.gray;
		}
		
		var brightness: float;
		
		if (this.gameObject.tag == "Dark"){
			brightness = 0.0;
		} else if (this.gameObject.tag == "DarkMid"){
			brightness = 0.1;
		} else if (this.gameObject.tag == "LightMid"){
			brightness = 0.2;
		} else {
			brightness = 0.3;
		}
		
		color = ConvertColor(color, brightness);
		this.gameObject.renderer.material.color = color;
	}
}

function ConvertColor (hue: Color, brightness: float) {
	return hue + Vector4(brightness, brightness, brightness, 1);
}

function Attack (other: Transform) {
	var otherCount: int = other.gameObject.GetComponent(CountryScript).armyCount;
	if (armyCount > otherCount) {
		armyCount -= otherCount;
		return true;
	} else {
		armyCount = 0;
		return false;
	}
}