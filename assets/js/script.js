const person = {
  Name : "Udoka Blessing",
  About : "I am a student of Bendel State University, Ugborikoko, Warri. I am passionate about becoming a web developer in order to integrate academic works into tech world"
}
document.getElementById('name').innerHTML = `User: ${person.Name}`
document.getElementById('text').innerHTML = `${person.About}`