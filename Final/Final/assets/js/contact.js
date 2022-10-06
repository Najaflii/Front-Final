function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns2 = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns2.length; i++) {
        var openDropdown2 = dropdowns2[i];
        if (openDropdown2.classList.contains('show2')) {
          openDropdown2.classList.remove('show2');
        }
      }
    }
  }