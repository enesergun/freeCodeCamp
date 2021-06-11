// Only change code below this line
function urlSlug(title) {
return title
    .toLowerCase()
    .split(" ")
    .filter(substr => substr !== "")
    .join("-");
}
// Only change code above this line
