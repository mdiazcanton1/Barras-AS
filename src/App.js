import logo from "./logo.svg";
import "./App.css";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("Comida");
  const [product, setProduct] = useState("Manzana");
  const products = {
    food: [{ name: "Fruta" }, { name: "Verdura" }],

    clothes: [
      { name: "Pantalones" },
      { name: "Remeras" },
      { name: "Anteojos" },
    ],
  };
  const [productOptions, setProductOptions] = useState(products.food);
  function handleCategoryChange(e) {
    setCategory(e.target.value);
    if (e.target.value === "Comida") {
      setProductOptions(products.food);
    } else if (e.target.value === "Ropa") {
      setProductOptions(products.clothes);
    }
  }
  function handleProductChange(e) {
    setProduct(e.target.value);
  }
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "<strong>Sales By Month for:</strong>",
    },
    yAxis: {
      title: {
        text: "Ventas",
      },
    },
    xAxis: {
      categories: ["January", "February", "March", "April"],
      title: {
        text: "Meses",
      },
    },
    series: [
      {
        name: "Ventas",
        data: [100, 300, 400, 525],
      },
    ],
  };
  return (
    <div className="App">
      <div className="nav">
        <div className="left-section-nav">
          <ul className="nav-ul">
            <li className="ul-menu">Menu</li>
            <li>
              <span className="circle-nav">
                <FontAwesomeIcon icon={faCircle} />
              </span>
              User Name
            </li>
          </ul>
        </div>
        <div className="right-section-nav">Sales Report</div>
      </div>
      <div className="body">
        <div className="body-select">
          <div className="col-1">
            <label for="select1">Categoria:</label>
            <select
              value={category}
              name="select1"
              id="select"
              onChange={handleCategoryChange}
            >
              <option selected={"Ropa" === category} value="Ropa">
                Ropa
              </option>
              <option selected={"Comida" === category} value="Comida">
                Comida
              </option>
            </select>
          </div>
          <div className="col-2">
            <label for="select2">Producto:</label>
            <select
              value={product}
              name="select2"
              id="select"
              onChange={handleProductChange}
            >
              {productOptions.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
          <div className="col-3">
            <label for="select3">Marca:</label>
            <select name="select3" id="select">
              <option value="Marca1">Marca1</option>
              <option value="Marca2">Marca2</option>
            </select>
          </div>
        </div>
      </div>
      <div id="container">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default App;
