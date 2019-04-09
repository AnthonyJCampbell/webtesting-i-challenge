module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// Items have: {
//   name,
//   durability (0-20),
//   enhancement (0-100)
// }

function succeed(item) {
  // Ensure that an object is passed
  if (typeof item !== 'object') {
    return {error: 'Pass an object, please'}
  }

  // Ensure that all three key-value pairs are in place.
  if (item.name === undefined ||
    item.durability === undefined ||
    item.enhancement === undefined) {
      return {error:'Make sure you pass an object with a name, durability, and enhancement value'}
  }

  // if (by error, an object gets passed with enhancement > 20, reset it to 20)
  if (item.enhancement > 20) {
    item.enhancement = 20
  }

  // if item.enhancement === 20, just let it go and return
  if (item.enhancement < 20) {
    item.enhancement += 1;
  }

  return { ...item };
}

function fail(item) {
  // Ensure that an object is passed
  if (typeof item !== 'object') {
    return {error: 'Pass an object, please'}
  }
  
  // Ensure that all three key-value pairs are in place.
  if (item.name === undefined ||
    item.durability === undefined ||
    item.enhancement === undefined) {
      return {error:'Make sure you pass an object with a name, durability, and enhancement value'}
  }

  // If (by error) enhancement is > 20, reset it to 20
  if (item.enhancement > 20) { item.enhancement = 20 }
  // if (by error) durability > 20, reset it to 20
  if (item.durability > 100) { item.durability = 100 }
  
  // if enhancement < 15, durability - 5
  if (item.enhancement < 15) {
    if (item.durability < 5) {
      item.durability = 0;
    } else {
      item.durability -= 5;
    }
  } 
  // if enhancement >= 15, durability - 10
  else if (item.enhancement >= 15) {
    if (item.durability < 10) {
      item.durability = 0
    } else {
      item.durability -= 10
    }
    // if enhancement > 16, enhancement - 1
    if (item.enhancement > 16) {
      item.enhancement -= 1;
    }
  } 
  else {
    throw new Error ('Something seems to have hone wrong with the fail')
  }
  return { ...item };
}

function repair(item) {
  // Ensure that an object is passed
  if (typeof item !== 'object') {
    return {error: 'Pass an object, please'}
  }
  
  // Ensure that all three key-value pairs are in place.
  if (item.name === undefined ||
    item.durability === undefined ||
    item.enhancement === undefined) {
      return {error:'Make sure you pass an object with a name, durability, and enhancement value'}
  }

  item.durability = 100;
  
  return { ...item };
}

function get(item) {
  return { ...item };
}
