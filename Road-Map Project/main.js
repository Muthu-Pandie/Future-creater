function home() {
  location.href = "./home.html";
}

function undo(event) {
  let block = document.getElementById(event);
  block.style.display = "none";
}

function content(con) {
  let a = document.getElementById(con);
  if (a.style.display == "" || "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}
