
    let boxthmicon = document.getElementById('boxthemeicon');
    let red = document.getElementById('redicon');
    let green = document.getElementById('greenicon');
    let blue = document.getElementById('blueicon');
    let pink = document.getElementById('pinkicon');
    let purple = document.getElementById('purpleicon');
    let moonicon = document.getElementById('moonicon');
    let darkthemeicon = document.getElementById('darkthemeicon');
    let home = document.getElementById('homeicon');
    let about = document.getElementById('abouticon');
    let skill = document.getElementById('skillicon');
    let team = document.getElementById('teamicon');
    let contact = document.getElementById('contacticon');
     let homesection = document.getElementById('Home');
    let aboutsection = document.getElementById('About');
    let skillsection = document.getElementById('Skills');
    let teamsection = document.getElementById('team');
    let contactsection = document.getElementById('contact');
    let homeimg = document.getElementById('homeimg');
    let button1 = document.getElementById("clicking-button1-move-up-page")
  let button2 = document.getElementById("clicking-button2-move-up-page")
  let firstpage = document.getElementById("move-up-page")
    let awaiz = document.getElementById("logo")

    setTimeout(function(){
        $('.loader_bg').fadeToggle();
    }, 1500);

  if(document.body.contains(firstpage)){
      console.log("first page");
      aboutsection.style.display="none"
      skillsection.style.display="none"
      teamsection.style.display="none"
      contactsection.style.display="none"
  }
  if(document.body.contains(homesection)){
      aboutsection.style.display="block"
      skillsection.style.display="block"
      teamsection.style.display="block"
      contactsection.style.display="block"
  }

window.addEventListener('scroll',function(){
if(window.pageYOffset>00)
{
    home.classList.add("addinicon")
       home.style.background = "linear-gradient(45deg,#00d0ff,cornflowerblue)"
       home.style.border="2px solid white"
       about.classList.remove("addinicon")
       skill.classList.remove("addinicon")
       team.classList.remove("addinicon")
       contact.classList.remove("addinicon")
}
})
window.addEventListener('scroll',function(){
if(window.pageYOffset>900)
{
       home.classList.remove("addinicon")
       home.style.background="transparent"
       home.style.border="2px solid transparent"
       about.classList.add("addinicon")
       skill.classList.remove("addinicon")
       team.classList.remove("addinicon")
       contact.classList.remove("addinicon")
}
})
window.addEventListener('scroll',function(){
if(window.pageYOffset>1800)
{
    home.classList.remove("addinicon")
       home.style.background="transparent"
       home.style.border="2px solid transparent"
       about.classList.remove("addinicon")
       skill.classList.add("addinicon")
       team.classList.remove("addinicon")
       contact.classList.remove("addinicon")
}
})
window.addEventListener('scroll',function(){
if(window.pageYOffset>2700)
{
    home.classList.remove("addinicon")
       home.style.background="transparent"
       home.style.border="2px solid transparent"
       about.classList.remove("addinicon")
       skill.classList.remove("addinicon")
       team.classList.add("addinicon")
       contact.classList.remove("addinicon")
}
})
window.addEventListener('scroll',function(){
if(window.pageYOffset>3600)
{
    home.classList.remove("addinicon")
       home.style.background="transparent"
       home.style.border="2px solid transparent"
       about.classList.remove("addinicon")
       skill.classList.remove("addinicon")
       team.classList.remove("addinicon")
       contact.classList.add("addinicon")
}
})

   
     home.onclick = function () {
       home.classList.add("addinicon")
       home.style.border="2px solid white"
       about.classList.remove("addinicon")
       skill.classList.remove("addinicon")
       team.classList.remove("addinicon")
       contact.classList.remove("addinicon")
    }
    about.onclick = function () {
       home.classList.remove("addinicon")
       home.style.background="transparent"
       home.style.border="2px solid transparent"
       about.classList.add("addinicon")
       skill.classList.remove("addinicon")
       team.classList.remove("addinicon")
       contact.classList.remove("addinicon")
    }
    skill.onclick = function () {
       home.classList.remove("addinicon")
       home.style.background="transparent"
       home.style.border="2px solid transparent"
       about.classList.remove("addinicon")
       skill.classList.add("addinicon")
       team.classList.remove("addinicon")
       contact.classList.remove("addinicon")
    }
    team.onclick = function () {
       home.classList.remove("addinicon")
       home.style.background="transparent"
       home.style.border="2px solid transparent"
       about.classList.remove("addinicon")
       skill.classList.remove("addinicon")
       team.classList.add("addinicon")
       contact.classList.remove("addinicon")
    }
    contact.onclick = function () {
       home.classList.remove("addinicon")
       home.style.background="transparent"
       home.style.border="2px solid transparent"
       about.classList.remove("addinicon")
       skill.classList.remove("addinicon")
       team.classList.remove("addinicon")
       contact.classList.add("addinicon")
    }
    red.onclick = function () {
        document.body.classList.add("red-theme");
        document.body.classList.remove("green-theme");
        document.body.classList.remove("blue-theme");
        document.body.classList.remove("pink-theme");
        document.body.classList.remove("purple-theme");
        boxthmicon.style.display = "none"
        homeimg.src="Images/red.jpeg"

    }
    green.onclick = function () {
        document.body.classList.add("green-theme");
        document.body.classList.remove("red-theme");
        document.body.classList.remove("blue-theme");
        document.body.classList.remove("pink-theme");
        document.body.classList.remove("purple-theme");
        boxthmicon.style.display = "none"
        homeimg.src="Images/green.jpeg"
    }
    blue.onclick = function () {
        document.body.classList.add("blue-theme");
        document.body.classList.remove("green-theme");
        document.body.classList.remove("red-theme");
        document.body.classList.remove("pink-theme");
        document.body.classList.remove("purple-theme");
        boxthmicon.style.display = "none"
        homeimg.src="Images/orange.jpeg"
    }
    pink.onclick = function () {
        document.body.classList.add("pink-theme");
        document.body.classList.remove("green-theme");
        document.body.classList.remove("blue-theme");
        document.body.classList.remove("red-theme");
        document.body.classList.remove("purple-theme");
        boxthmicon.style.display = "none"
        homeimg.src="Images/pink.jpeg"
    }
    purple.onclick = function () {
        document.body.classList.add("purple-theme");
        document.body.classList.remove("green-theme");
        homeimg.src="Images/purple.jpeg"
    }
    moonicon.onclick=function(){
        boxthemeicon.style.display="block"
    }
    moonicon.ondblclick=function(){
        boxthemeicon.style.display="none"
    }
    darkthemeicon.onclick=function(){
        document.body.classList.add("white-theme")
    }
    darkthemeicon.ondblclick=function(){
        document.body.classList.remove("white-theme")
    }
    button1.onclick = function () {
    firstpage.classList.add("moveup")
    Home.style.display = "block";
    Mvie.style.display = "block";
  }
  button2.onclick = function () {
    
    firstpage.classList.add("moveup")
    Home.style.display = "block";
    Mvie.style.display = "block";
  }