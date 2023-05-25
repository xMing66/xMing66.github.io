var now = new Date();

// Set the start date for the "来到商务" duration
var businessStartDate = new Date("09/01/2021 13:15:34");

function padZero(value) {
  return value < 10 ? "0" + value : value;
}

function createTime() {
  now.setTime(now.getTime() + 1000);
  var startDate = new Date("05/24/2023 00:00:00");
  var elapsedTimeSeconds = Math.floor((now - startDate) / 1000);
  var days = Math.floor(elapsedTimeSeconds / 86400);
  elapsedTimeSeconds -= days * 86400;
  var hours = Math.floor(elapsedTimeSeconds / 3600);
  elapsedTimeSeconds -= hours * 3600;
  var minutes = Math.floor(elapsedTimeSeconds / 60);
  var seconds = elapsedTimeSeconds % 60;

  var businessElapsedTimeSeconds = Math.floor((now - businessStartDate) / 1000);
  var businessDays = Math.floor(businessElapsedTimeSeconds / 86400);
  businessElapsedTimeSeconds -= businessDays * 86400;
  var businessHours = Math.floor(businessElapsedTimeSeconds / 3600);
  businessElapsedTimeSeconds -= businessHours * 3600;
  var businessMinutes = Math.floor(businessElapsedTimeSeconds / 60);
  var businessSeconds = businessElapsedTimeSeconds % 60;

  let output = `<div style="font-size:13px;font-weight:bold">本站居然运行了 ${padZero(days)} 天 ${padZero(hours)} 小时 ${padZero(minutes)} 分 ${padZero(seconds)} 秒 &nbsp;<i id="heartbeat" class='fas fa-heartbeat'></i> <br> 在商务生活 ${padZero(businessDays)} 天 ${padZero(businessHours)} 小时 ${padZero(businessMinutes)} 分 ${padZero(businessSeconds)} 秒 &nbsp;🚀</div>`;

  if (document.getElementById("workboard")) {
    document.getElementById("workboard").innerHTML = output;
  }
}

setInterval(() => {
  createTime();
}, 1000);
