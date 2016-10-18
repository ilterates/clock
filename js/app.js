console.log("Connected");
var hour, minute, second;
var set;
var audio = new Audio('https://raw.githubusercontent.com/ilterates/badalarm/master/assets/_boat.mp3');

function time() {
  now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();
  // this code adds zero in front of single numbers //
  // if ( hour < 10 ){
  //   hour = "0" + hour;
  // } if ( minute < 10 ) {
  //   minute = "0" + minute;
  // } if ( second < 10 ) {
  //   second = "0" + second;
  // }
    $("#time").text( hour + ":" + minute + ":" + second );
  var t = setTimeout(time, 500);
}
// function setAlarm() {
//   if ( set === 0 || undefined ) {
//     set = 1;
//   } else {
//     set = 0;
//     }
// }
      // setting the alarm //
      // hour //
var hourVal = $("#alarm-hour").val();
$("#hour-up-arrow").click(function(){
  hourVal ++;
  $("#alarm-hour").val(hourVal);
  if (hourVal >= 23) {
    hourVal = -1;
  }
});
$("#hour-down-arrow").click(function(){
  hourVal --;
  $("#alarm-hour").val(hourVal);
  if (hourVal <= 0) {
    hourVal = 24;
  }
});
    // minute //
var minuteVal = $("#alarm-minute").val();
$("#minute-up-arrow").click(function(){
  minuteVal ++;
  $("#alarm-minute").val(minuteVal);
  if (minuteVal >= 59) {
    minuteVal = -1;
  }
});
$("#minute-down-arrow").click(function(){
  minuteVal --;
  $("#alarm-minute").val(minuteVal);
  if (minuteVal <= 0) {
    minuteVal = 60;
  }
});
function alarm() {
  // if ( set === 1 ) {
    var alarmHour = $("#alarm-hour").val();
    var alarmMinute =$("#alarm-minute").val();
    var hourString = hour.toString();
    var minuteString = minute.toString();
    // console.log(hour,hourString + 'Hour');
    // console.log(minute,minuteString + 'minute');
    if ( alarmHour === hourString && alarmMinute === minuteString ) {
    audio.play();
    }
    var check = setTimeout(alarm, 500);

    // $("#set-button").on('click',function( e ){
    //   e.stopImmediatePropagation();
    //   alarm();
    //
    // });
    $("#stop-button").on('click',function( e ){
      e.stopImmediatePropagation();
      audio.pause();
    });
  // }
}