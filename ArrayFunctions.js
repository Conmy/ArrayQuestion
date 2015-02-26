// ================================================================================================
// Name		:	Array Functions
// Author	:	David Conmy
// ================================================================================================
function getMMArrayAsColorBlock(array, M){
	var text = "<table>";
	for(var i=0;i<M;i++){
		text += "<tr>";
		for(var j=0;j<M;j++){
			text += "<td>";
			text += "<div class='colorBlock' style='background-color:" + array[i][j].toString() +"'></div>";
			text += "</td>";
		}
		text += "</tr>";
	}
	text += "</table>";
	
	return text;
}

function rotateMMArray(array, M){
	
	var newArray = new Array(M);
	for(var i=0;i<M;i++){
		newArray[i] = new Array(M);
	}
	
	for(var a=0;a<M;a++){
		for(var b=M-1;b>=0;b--){
			var q = M - a - 1;
			var p = b;
			
			newArray[p][q] = array[a][b];
		}
	}
	
	return newArray;
}
