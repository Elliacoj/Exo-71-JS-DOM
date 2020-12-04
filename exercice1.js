let monDiv = document.createElement('div');
let monDiv2 = document.createElement('div');
let viewport = document.getElementById("viewport");

viewport.appendChild(monDiv);
viewport.appendChild(monDiv2);

monDiv.innerHTML = "Ce div a été ajouté en utilisant javascript";

monDiv2.style.backgroundColor = "red";
monDiv2.style.height = "100px";
monDiv2.style.width = "100px";

document.getElementById("aSupprimer").remove();