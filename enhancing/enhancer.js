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
  // Accepts an item

  //On Succeed, enhancement increases by 1
    // if enhancement = 20, enhancement is unchanged
  // Durability remains unchanged

  // Returns a new item
  return { ...item };
}

function fail(item) {
  // if enhancement < 15, durability - 5
  if (item.enhancement < 15) {
    item.durability -= 5;
  } 
  // if enhancement >= 15, durability - 10
  else if (item.enhancement >= 15) {
    item.durability -= 10
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
  // Accepts an item
  // Returns a NEW with durability set to 100
  return { ...item };
}

function get(item) {
  return { ...item };
}
