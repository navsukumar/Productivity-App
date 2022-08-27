const boredButton = document.getElementById("bored-button");
const card = document.getElementById("card");


async function fetchActivity() {
  // YOUR CODE HERE
  const response = await fetch("http://www.boredapi.com/api/activity/");
  const activity = await response.json();
  return activity; 
}


boredButton.addEventListener("click", async () => {
  // empty card
  // get activity from API
  // process this data into 'p' elements
  card.replaceChildren();
  const activity = await fetchActivity();
  // BEGIN PART 8
  for (const [key, value] of Object.entries(activity)) {
    const detail = document.createElement("p");
    detail.innerHTML = key + ": " + value;
    card.appendChild(detail);
  }
});
