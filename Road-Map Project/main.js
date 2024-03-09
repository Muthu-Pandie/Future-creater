function home() {
    location.href = "./home.html";
  }

  function undo(){
    location.reload()
  }

  var html = document.getElementById("html"); 
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var git = document.getElementById("git");
  displaying = 1;

  
  function html1(){
    
    if(displaying === 1){
      html.style.display = "block";
      displaying = 0
    }else{
      html.style.display = "none";
      displaying = 1
    }
  }

  function css2(){
    
    if(displaying === 1){
      css.style.display = "block";
      displaying = 0
    }else{
      css.style.display = "none";
      displaying = 1
    }
  }

  function js3(){
    
    if(displaying === 1){
      js.style.display = "block";
      displaying = 0
    }else{
      js.style.display = "none";
      displaying = 1
    }
  }

  function git1(){
    
    if(displaying === 1){
      git.style.display = "block";
      displaying = 0
    }else{
      git.style.display = "none";
      displaying = 1
    }
  }


