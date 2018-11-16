function takeANumber(currQueue, name) {
  // return "Welcome, " + name + "." + " You are number 1 in line."
  console.log(currQueue);
  currQueue.push(name);
  return `Welcome, ${name}. You are number ${currQueue.length} in line.`

}
