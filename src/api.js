import renderInfoCard from "./scripts";'./scripts';


const getData = () => {
  fetch("https://pacific-badlands-43237.herokuapp.com/api/v1/users")
    .then(response => response.json())
    .then((data) => {renderInfoCard(data)})
}



export default getData;
