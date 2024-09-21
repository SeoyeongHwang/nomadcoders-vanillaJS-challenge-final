const today = document.querySelector("#date-area span");
const monthNames = ['Jan.', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const date = new Date();
const month = date.getMonth();
const dateOfMonth = date.getDate();
const dayOfWeek = date.getDay();

today.innerText = `${dayNames[dayOfWeek]} ${monthNames[month]} ${dateOfMonth}`;