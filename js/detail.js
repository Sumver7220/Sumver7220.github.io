var restauranttype = "../resource/breakfast.json";
var u = location.href;
var temp = u.split("?");
var vars = temp[1].split("&");
var restauranttype = "../resource/" + vars[0] + ".json";
var index = vars[1];
var mapurl =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3653.530779590734!2d120.5323872!3d23.6927324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ec8034a96584b%3A0x97281a6be8067d8b!2z56eR5aSn5pep6aSQ6LuK!5e0!3m2!1szh-TW!2stw!4v1641295441948!5m2!1szh-TW!2stw";
$(function () {
  $.ajax({
    url: restauranttype,
    dataType: "json",
    success: show,
    error: function () {
      alert("error");
    },
  });
});
function show(data) {
  console.log(data);
  console.log(data.data);
  let arryData = data.data;
  document.getElementById("menu").setAttribute("src", arryData[index].menu);
  document.getElementById("name").innerHTML = arryData[index].name;
  document.getElementById("addr").innerHTML =
    "<span>" + arryData[index].addr + "</span>";
  document.getElementById("desc").innerHTML = "電話:" + arryData[index].tel;
  document.getElementById("map").setAttribute("src", mapurl);
}
