const getData = () => {
  fetch("https://pacific-badlands-43237.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .then((data) => {renderInfoCard(data); compareSteps(data)})
}

export getData
