const server = require("./api/server");

const PORT = 5555;

server.listen(PORT, () => {
  console.log(`Server Live at port ${PORT}`);
});
