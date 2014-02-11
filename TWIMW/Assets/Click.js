#pragma strict

var selected: Transform;
var cam: Camera;
var player: GameObject;
var player1: GameObject;
var player2: GameObject;
var player3: GameObject;
var player4: GameObject;
var player5: GameObject;

function Start () {

}

// Test sync
function Update () {
	if (Input.GetMouseButtonDown(0)){ // if left button pressed...
    	// create a ray passing through the mouse pointer:
   		var ray = cam.ScreenPointToRay(Input.mousePosition);
   	 	var hit: RaycastHit;
    	if (Physics.Raycast(ray, hit)){ // if something hit...
      		// if you must do something with the previously
      		// selected item, do it here,
      		// then select the new one:
      		
      		
      		selected = hit.transform;
      		
      		if (selected.gameObject.tag == "Button") {
      			ChangeTurn();
      		} else {
      			selected.GetComponent(CountryScript).ChangePlayer(player);
      		}
      		/*
      		if (player.tag == "Red"){
      			//color = Color.red;
      			color = Vector4(0.5, 0, 0, 1);
      		} else if (player.tag == "Orange"){
      			color = Vector4(1, 0.5, 0, 1);
      			//color = Vector4(0.5, 0.2, 0, 1);
      		} else if (player.tag == "Yellow"){
      			//color = Color.yellow;
      			color = Vector4(0.5, 0.5, 0, 1);
      		} else if (player.tag == "Green"){
      			//color = Color.green;
      			color = Vector4(0, 0.5, 0, 1);
      		} else if (player.tag == "Blue"){
      			//color = Color.blue;
      			color = Vector4(0, 0.5, 1, 1);
      			//color = Vector4(0, 0, 0.5, 1);
      		} else if (player.tag == "Purple"){
      			//color = Vector4(.75, 0, 1, 1);
      			color = Vector4(0.5, 0, 1, 1);
      			//color = Vector4(0.5, 0, 0.5, 1);
      		} else {
      			color = Color.gray;
      		}
      		
      		var brightness: float;
      		
      		if (selected.gameObject.tag == "Dark"){
      			brightness = 0.0;
      		} else if (selected.gameObject.tag == "DarkMid"){
      			brightness = 0.1;
      		} else if (selected.gameObject.tag == "LightMid"){
      			brightness = 0.2;
      		} else {
      			brightness = 0.3;
      		}
      		
      		color = ConvertColor(color, brightness);
      		selected.gameObject.renderer.material.color = color;
      		*/
      		
      		Debug.Log("Clicked " + selected.gameObject.name);
    	}
  	}
}

function ChangeTurn () {
	if (player == player1 && player2.tag != "NotPlaying") {
		player = player2;
	} else if (player == player2 && player3.tag != "NotPlaying") {
		player = player3;
	} else if (player == player3 && player4.tag != "NotPlaying") {
		player = player4;
	} else if (player == player4 && player5.tag != "NotPlaying") {
		player = player5;
	} else {
		player = player1;
	}
}
