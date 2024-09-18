export const format_to_db_date_format = (givenDate) => {
  if (givenDate) {
    return new Date(givenDate).toISOString().split("T")[0];
  }

  return new Date().toISOString(); //.split("T")[0]
};

export const format_dob_to_readable = (dob) => {
  if (dob) {
    let dt = new Date(dob);

    //format date object to string type - aug 2, 2024
    return `${months_arr[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`;
  }
};

export const calculate_age_from_dob = (dob) => {
  var dt = new Date(dob);
  //calculate month difference from current date in time
  var month_diff = Date.now() - dt.getTime();

  //convert the calculated difference in date format
  var age_dt = new Date(month_diff);

  //extract year from date
  var year = age_dt.getUTCFullYear();

  //now calculate the age of the user
  var age = Math.abs(year - 1970);

  return age;
};

function generate_greeting_from_time() {
  let dt = new Date();
  let hour = dt.getHours();

  if (hour >= 0 && hour < 12) {
    return "Good morning";
  }

  if (hour > 12 && hour < 16) {
    return "Good afternoon";
  }

  return "Good evening";
}

function format_time_ago(targetTime) {
  var dt = new Date(targetTime);
  var seconds = Math.floor((new Date() - dt) / 1000);

  var interval;

  interval = seconds / 86400;
  if (interval > 1) {
    if (interval >= 2) {
      return `${String(dt.getDate()).padStart(2, "0")}/${String(
        dt.getMonth() + 1
      ).padStart(2, "0")}/${dt.getFullYear()}`;
    }
    return "Yesterday";
  }

  interval = seconds / 3600;
  if (interval > 1) {
    if (interval >= 2) {
      return Math.floor(interval) + " hours ago";
    }
    return Math.floor(interval) + " hour ago";
  }

  interval = seconds / 60;
  if (interval > 1) {
    if (interval >= 2) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(interval) + " minute ago";
  }

  return Math.floor(seconds) + " seconds ago";
}
