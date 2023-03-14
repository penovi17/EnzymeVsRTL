const getCounterData = new Promise((res, rej) => {
  fetch('/getInitialData')
  .then(res => res.json())
  .then(data => {
    res(parseInt(data.current.counterValue))
  })
  .catch(rej);
});

export default getCounterData;