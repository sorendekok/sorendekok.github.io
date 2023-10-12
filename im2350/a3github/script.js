/* Make comments with Alt-Shift-A */
// Make comments with Alt-Shift-A

/* create arrays from the group of HTML elements */
let shortVersion = Array.from(document.getElementsByClassName("short"));
let midVersion = Array.from(document.getElementsByClassName("mid"));
let longVersion = Array.from(document.getElementsByClassName("long"));

/* hides the first section of the array */
/* document.getElementsByClassName("short")[0].style.display = "none"; */

/* this function results the scroll position and acts on certain values of this position */
function scrollLevel(){
  const scrollPosition = document.getElementById("scroller");
  /* the position from the top */
  let y = scrollPosition.scrollTop;
  /* console.log(y); */

  /* if y < 107, show only the short version */
  if(y < 107){
    /* console.log("short version"); */
    /* for each div of the array */
    for(let textDivShort of shortVersion){
      /* console.log(textDivShort); */
      textDivShort.style.display = "block";
    }

    for(let textDivMid of midVersion){
      /* console.log(textDivMid); */
      textDivMid.style.display = "none";
    }

    for(let textDivLong of longVersion){
      /* console.log(textDivLong); */
      textDivLong.style.display = "none";
    }
  }
   /* if 107 =< y < 200, show the mid version: mid version consists then of "short" and "mid" */
  if(y >= 107 && y < 200){
    /* console.log("mid version"); */

    for(let textDivShort of shortVersion){
      /* console.log(textDivShort); */
      textDivShort.style.display = "block";
    }

    for(let textDivMid of midVersion){
      /* console.log(textDivMid); */
      textDivMid.style.display = "block";
    }

    for(let textDivLong of longVersion){
      /* console.log(textDivLong); */
      textDivLong.style.display = "none";
    }
  }
  /* y > 200, show the long version: long version consists then of "short", "mid", and "long" */
  if(y >= 200){
    /* console.log("long version"); */

    for(let textDivShort of shortVersion){
      /* console.log(textDivShort); */
      textDivShort.style.display = "block";
    }

    for(let textDivMid of midVersion){
      /* console.log(textDivMid); */
      textDivMid.style.display = "block";
    }

    for(let textDivLong of longVersion){
      /* console.log(textDivLong); */
      textDivLong.style.display = "block";
    }
  }
}