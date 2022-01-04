var num = 0;
var restauranttype = "resource/breakfast.json";
document.onclick = function () {
  var obj = event.srcElement;
  if (obj.type == "button") {
    switch (obj.id) {
      case "breakfast":
        restauranttype = "resource/breakfast.json";
        num = 5;
        break;
      case "lunch":
        restauranttype = "resource/lunch.json";
        num = 10;
        break;
      case "night":
        restauranttype = "resource/night.json";
        num = 20;
        break;
      case "snack":
        restauranttype = "resource/snack.json";
        num = 50;
        break;
      case "drink":
        restauranttype = "resource/drink.json";
        num = 100;
        break;
      default:
        alert("none");
    }
    lastid = obj.id;
  }
  getList();
};
function getList() {
  $.ajax({
    url: restauranttype,
    dataType: "json",
    success: random,
    error: function () {
      alert("error");
    },
  });
}
function random(data) {
  console.log(data);
  console.log(data.data);
  let arryData = data.data;
  num = arryData.length;
  rand = Math.floor(Math.random() * num) + 1;
  window.location.href = "detail.html?" + lastid + "&" + rand;
}
