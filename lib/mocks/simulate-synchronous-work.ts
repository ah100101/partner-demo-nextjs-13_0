const simulateSynchronousWork = () => {
  return new Promise((resolve) =>
    // wait between 1 - 3 seconds
    setTimeout(resolve, (1 + Math.random() * 2) * 1000)
  );
};

export default simulateSynchronousWork;
