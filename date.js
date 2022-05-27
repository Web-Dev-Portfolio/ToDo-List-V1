module.exports.getFullDate = getFullDate;
function getFullDate(){
  var date = new Date()
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }
  todayFullDate = date.toLocaleDateString("id-ID", options)
  return todayFullDate
};
