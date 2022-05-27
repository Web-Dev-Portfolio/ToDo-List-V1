module.exports.getFullDate = getFullDate;
function getFullDate(){
  var date = new Date()
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }
  return date.toLocaleDateString("id-ID", options)
};

exports.getDayName = function(){
  var date = new Date()
  let options = {
    weekday: "long",
  }
  return date.toLocaleDateString("id-ID", options)
}
