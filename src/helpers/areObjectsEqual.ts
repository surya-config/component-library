export function areObjectsEqual(object1: any, object2: any) {
  /* 
    1. Get keys of both the objects we want to compare.
    2. If both object's key count are not same, we return false since they are not equal
    3. We will map through the first object and check if the key and value in the second object is same, if not, we will return false
  */
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  const areObjectsSame = object1Keys.every((key) => {
    const object1Value = object1[key];
    const object2Value = object2[key];

    return object1Value === object2Value;
  });

  return areObjectsSame;
}
