function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = name('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);
  