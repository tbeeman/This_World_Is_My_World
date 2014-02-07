#pragma strict

var selected: Transform;
var cam: Camera;
var player: GameObject;
var player1: GameObject;
var player2: GameObject;

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
      		if (player == player1) {
      			player = player2;
      		} else {
      			player = player1;
      		}
      		
      		selected = hit.transform;
      		var color: Color;
      		
      		if (player.tag == "Red"){
      			color = Color.red;
      		} else if (player.tag == "Orange"){
      			color = Vector4(1, 0.5, 0, 1);
      		} else if (player.tag == "Yellow"){
      			color = Color.yellow;
      		} else if (player.tag == "Green"){
      			color = Color.green;
      		} else if (player.tag == "Blue"){
      			color = Color.blue;
      		} else if (player.tag == "Purple"){
      			color = Vector4(.75, 0, 1, 1);
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
      		Debug.Log("Clicked " + selected.gameObject.name);
    	}
  	}
}

function ConvertColor (hue: Color, brightness: float) {
	return hue + Vector4(brightness, brightness, brightness, 1);
}