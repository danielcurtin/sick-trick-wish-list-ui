function getTricks() {
  return fetch('http://localhost:3001/api/v1/tricks')
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error();
    };
  });
};

function postNewTrick(newTrick) {
  return fetch('http://localhost:3001/api/v1/tricks', {
    method: 'POST',
    body: JSON.stringify(newTrick),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error();
    };
  });
};

export { getTricks, postNewTrick };