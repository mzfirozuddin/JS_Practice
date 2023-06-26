const courses = [
  {
    name: "Complete Angular Course",
    price: "2.9",
  },
  {
    name: "Complete React Js Course",
    price: "2.1",
  },
  {
    name: "Complete Node Js Course",
    price: "2.3",
  },
  {
    name: "Complete MERN Course",
    price: "3.1",
  },
  {
    name: "Complete MongoDB Course",
    price: "2.7",
  },
  {
    name: "Complete C++ Bootcamp",
    price: "2.8",
  },
];

{
  /* <li class="list-group-item">
  Complete React Js Course<span>2.4</span>
</li>; */
}

function generateList() {
  const ul = document.querySelector(".list-group");

  ul.innerHTML = ""; // Here we reset the value

  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-end");
    const price = document.createTextNode("$ " + course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

// generateList();   // we can simply call this function this way OR

window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateList();
});
