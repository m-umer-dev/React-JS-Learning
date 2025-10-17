let f = () => {
  try {
    let a = 0;
    console.log(a);
  } catch (error) {
    console.log("There is an error in the Try Block");
  } finally {
    console.log("This is the finally block");
  }
};

f();
