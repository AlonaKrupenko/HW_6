import users from "./users_with_raiting.js";

const names = [];
const ratingArr = [];
const ratingArr2 = [];

users.forEach((sudent) => {
  names.push(sudent.firstName + " " + sudent.lastName);
  ratingArr.push(sudent.rating);
  ratingArr2.push(Math.floor(Math.random() * 100 + 1));
});

const chartElem = document.createElement("canvas");
chartElem.setAttribute("id", "myChart");
chartElem.setAttribute("width", "400");
chartElem.setAttribute("height", "400");
chartElem.setAttribute("aria-label", "chart");
chartElem.setAttribute("role", "img");

document.body.append(chartElem);

const ctx = chartElem;
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: names,
    datasets: [
      {
        label: "rating 2021",
        data: ratingArr,
        borderColor: "rgba(255, 205, 86, 0.8)",
        backgroundColor: "rgba(255, 205, 86, 0.2)",
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: "rating 2022",
        data: ratingArr2,
        borderColor: "rgba(153, 102, 255, 0.8)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: true,
      title: {
        display: true,
        text: "Group rating",
      },
    },
  },
});
