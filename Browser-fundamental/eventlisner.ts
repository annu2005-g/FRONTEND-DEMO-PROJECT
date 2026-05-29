 //<!DOCTYPE html>
//<html lang="en">
    
 // <form id="userForm">
 //   <input type="text" id="name" placeholder="Name">
 //   <input type="email" id="email" placeholder="Email">
 //   <button type="submit">Submit</button>
 // </form>
 // <div id="output"></div>
    

interface User {
  name: string;
  email: string;
}

const form = document.getElementById("userForm") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const output = document.getElementById("output") as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const user: User = {
    name: nameInput.value,
    email: emailInput.value,
  };

  displayUser(user);
});

function displayUser(user: User): void {
  output.innerHTML = `
    <p>Name: ${user.name}</p>
    <p>Email: ${user.email}</p>
  `;
}
   