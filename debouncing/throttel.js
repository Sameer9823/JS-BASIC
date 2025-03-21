function throttle(func, delay) {
    let lastCall = 0;
    let timer = null;
  
    return function (...args) {
      const now = Date.now();
  
      if (now - lastCall >= delay) {
        // Immediate execution if enough time has passed
        lastCall = now;
        func(...args);
      } else if (!timer) {
        // Ensures trailing execution (executes once after the delay)
        timer = setTimeout(() => {
          lastCall = Date.now();
          timer = null;
          func(...args);
        }, delay - (now - lastCall));
      }
    };
  }
  
  function sendChatMessage(msg) {
    console.log("Message sent:", msg, "at", new Date().toLocaleTimeString());
  }
  
  const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2000);
  
  // Simulate rapid function calls
  sendChatMessageWithSlowMode("Hello");
  sendChatMessageWithSlowMode("Hello world");
  sendChatMessageWithSlowMode("Hello W");
  sendChatMessageWithSlowMode("Hello Wo");
  sendChatMessageWithSlowMode("Hello Wor");
  sendChatMessageWithSlowMode("Hello Worl");

  