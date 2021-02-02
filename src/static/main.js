const socket = new WebSocket("ws://d6eff41e2a4b.ngrok.io/");

// Função executada quando receber uma mensagem
socket.onmessage = (message) => {
  const { data } = message;
  const messages = JSON.parse(data);
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  messages.map((item) => {
    const liElement = document.createElement("li");
    liElement.innerText = item;
    ul.appendChild(liElement);
  });
};

// Função executada quando  o formulário for submetido
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputElement = document.querySelector("input");
  const { value: word } = inputElement;
  socket.send(word);
  inputElement.value = "";
});
