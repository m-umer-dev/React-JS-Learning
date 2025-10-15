try {
  throw new Error("Bhai variable define kero phele ");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error);
}
