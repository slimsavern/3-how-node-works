const EventEmitter = require("events");
const http = require("http");
const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
	console.log("There was a new sale");
});

myEmitter.on("NewSale", () => {
	console.log("Costomer Name: Jonas");
});

myEmitter.on("newSale", (stock) => {
	console.log(`There are now ${stock} items in stock`);
});
myEmitter.emit("newSale", 9);
//////

const server = http.createServer();

server.on("request", (req, res) => {
	console.log("request received");
	res.end("Request Received");
});

server.on("request", (req, res) => {
	console.log("Another request received");
});

server.on("close", () => {
	console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
	console.log("Waiting for response");
});
