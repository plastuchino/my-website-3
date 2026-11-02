// This runs when someone clicks the button. Try changing the message!
document.getElementById("hi").addEventListener("click", () => {
  document.getElementById("reply").textContent = "hi back! 👋";
});

document.addEventListener("click", (event) => {
  if (event.target.id === "tour-hi") {
    sayHello();
  }
})

function sayHello() {
  console.log("Hi!");
}