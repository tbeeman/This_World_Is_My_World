#pragma strict

var countries: Array = new Array();

function Start () {

}

function Update () {

}

function AddCountry (country: GameObject) {
	var found: boolean = false;
	for (var i: int = 0; i < countries.length; ++i) {
		if (country == countries[i]) {
			found = true;
		}
	}
	if (!found) {
		countries.Add(country);
		Debug.Log(this.gameObject.name + " now controls " + country.name);
	}
}

function RemoveCountry (country: GameObject) {
	for (var i: int = 0; i < countries.length; ++i) {
		if (country == countries[i]) {
			countries.RemoveAt(i);
			Debug.Log(this.gameObject.name + " no longer controls " + country.name);
			break;
		}
	}
}