function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    func(...args);
  };
}

function sendChatMessage(msg) {
  console.log("Message sent: ", msg);
}

const sendChatMessagewithslowmode = throttle(sendChatMessage, 2 * 1000);

sendChatMessagewithslowmode("Hello");
sendChatMessagewithslowmode("Hello ");
sendChatMessagewithslowmode("Hello W");
sendChatMessagewithslowmode("Hello Wo");
sendChatMessagewithslowmode("Hello Wor");
sendChatMessagewithslowmode("Hello Worl");
sendChatMessagewithslowmode("Hello World");
