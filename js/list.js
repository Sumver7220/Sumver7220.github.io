var lastid = "breakfast";
var restauranttype = "resource/breakfast.json";
document.onclick = function () {
  var obj = event.srcElement;
  if (obj.type == "button") {
    switch (obj.id) {
      case "breakfast":
        restauranttype = "resource/breakfast.json";
        refresh();
        break;
      case "lunch":
        restauranttype = "resource/lunch.json";
        refresh();
        break;
      case "night":
        restauranttype = "resource/night.json";
        refresh();
        break;
      case "snack":
        restauranttype = "resource/snack.json";
        refresh();
        break;
      case "drink":
        restauranttype = "resource/drink.json";
        refresh();
        break;
      default:
        alert("none");
    }
    document.getElementById(lastid).classList.remove("active");
    document.getElementById(obj.id).classList.add("active");
    lastid = obj.id;
  }
};
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
  arryData.forEach((x) => {
    document.getElementById("list_content").innerHTML +=
      '<div class="col mb-5">' +
      '<div class="card h-60">' +
      '<img class="card-img-top" src="https://dummyimage.com/450x450/dee2e6/6c757d.jpg" alt="..." /> ' +
      '<div class="card-body p-4">' +
      '<div class="text-center">' +
      '<h5 class="fw-bolder">' +
      x.name +
      "</h5>" +
      x.addr +
      "</div>" +
      "</div>" +
      '<div class="card-footer p-2 pt-0 border-top-0 bg-transparent">' +
      '<div class="text-center">' +
      '<a class="btn btn-outline-primary mt-auto" href="detail.html?' +
      lastid +
      "&" +
      x.seq +
      '">詳細資料 ></a>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
  });
}
function refresh() {
  document.getElementById("list_content").innerHTML = "";
  $.ajax({
    url: restauranttype,
    dataType: "json",
    success: show,
    error: function () {
      alert("error");
    },
  });
  event.preventDefault();
}
