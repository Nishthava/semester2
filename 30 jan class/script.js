
  const API_KEY = "8443a58f46db48f187462006260302";

  const inputbox = document.getElementById("location");
  const btn = document.getElementById("btn");

  const tempEl = document.querySelector(".temperature");
  const locationEl = document.querySelector(".place");
  const timeEl = document.querySelector(".time");
  const dayEl = document.querySelector(".day");
  const dateEl = document.querySelector(".date");
  const conditionEl = document.querySelector(".condition");
  const iconEl = document.querySelector(".icon");
console.log(tempEl, locationEl, timeEl, dayEl, dateEl, conditionEl, iconEl);



  btn.addEventListener("click", async () => {
    const city = inputbox.value.trim();
    if (!city) {
      alert("Please enter a city name");
      return;
    };
      
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );

      const data = await response.json();

      if (data.error) {
        alert(data.error.message);
        return;
      }

      // update UI
      tempEl.textContent = data.current.temp_c + " °C";
      locationEl.textContent = data.location.name;

      const localTime = data.location.localtime; // "YYYY-MM-DD HH:MM"
      const [date, time] = localTime.split(" ");

      timeEl.textContent = time;
      dateEl.textContent = date;
      dayEl.textContent = new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
      });

      conditionEl.textContent = data.current.condition.text;
      iconEl.src = "https:" + data.current.condition.icon;

      inputbox.value = "";

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  });
