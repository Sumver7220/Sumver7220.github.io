var restauranttype = "../resource/breakfast.json";
var u = location.href;
var temp = u.split("?");
var vars = temp[1].split("&");
var restauranttype = "../resource/" + vars[0] + ".json";
var index = vars[1] - 1;
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
  document.getElementById("name").innerHTML = arryData[index].name;
  document.getElementById("addr").innerHTML =
    "<span>" + arryData[index].addr + "</span>";
}
