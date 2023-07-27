import React, { useState } from "react";
import "./App.css";
import { cars } from "./data";
import AllCars from "./AllCars";

export default function OperationComponent() {
  const [cs, setCars] = useState(cars);
  const [carModel, setCarModel] = useState("");
  const [carVendor, setCarVendor] = useState("");
  const [carImage, setCarImage] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedCarId, setSelectedCarId] = useState("");

  function handleSubmitFunc(e) {
    e.preventDefault();
    const newAddedCar = {
      carId: cs.length + 1,
      carModel: carModel,
      carImage: carImage,
      carVendor: carVendor,
      carPrice: carPrice,
    };
    setCars([...cs, newAddedCar]); // Adding Car
    setCarImage("");
    setCarModel("");
    setCarVendor("");
    setCarPrice("");
    alert("New Car was Added Successfully");
  }

  function handleUpdateSubmitFunc(e) {
    e.preventDefault();
    // Update existing product
    const updatedCar = {
      carModel: selectedCar?.carModel,
      carVendor: selectedCar?.carVendor,
      carImage: selectedCar?.carImage,
      carPrice: selectedCar?.carPrice,
    };

    // Find the index of the selected product in the array
    const selectedIndex = cs.findIndex((c) => c.carId === selectedCarId);

    // Create a new array with the updated product
    const updatedCars = [
      ...cs.slice(0, selectedIndex),
      updatedCar,
      ...cs.slice(selectedIndex + 1),
    ];

    // Update the state with the new array of products
    setCars(updatedCars);

    // Clear the selected product after updating
    setSelectedCarId(null);
    setSelectedCar(null);

    alert("Car Updated Successfully");
  }

  function onClickForUpdateFunc(c) {
    setSelectedCar(c);
    setSelectedCarId(c.carId);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmitFunc}>
        <br></br>
        <div className="form-group">
          <input
            type="text"
            value={carVendor}
            onChange={(e) => setCarVendor(e.target.value)}
            id="vendor"
            name="vendor"
            placeholder="Car Vendor"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            id="model"
            name="model"
            placeholder="Car Model"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
            id="price"
            name="price"
            placeholder="Product Price"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={carImage}
            onChange={(e) => setCarImage(e.target.value)}
            id="image"
            name="image"
            placeholder="Car Image"
          />
        </div>
        <button type="submit">
          <b>Add Product</b>
        </button>
        <br></br>
        <br></br>
      </form>
      <br></br>
      <br></br>
      <form onSubmit={handleUpdateSubmitFunc}>
        <br></br>
        <div className="form-group">
          <input
            type="text"
            value={selectedCar?.carVendor || ""}
            onChange={(e) =>
              setSelectedCar({
                ...selectedCar,
                carVendor: e.target.value,
              })
            }
            id="vendor"
            name="vendor"
            placeholder="Car Vendor"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={selectedCar?.carModel || ""}
            onChange={(e) =>
              setSelectedCar({
                ...selectedCar,
                carModel: e.target.value,
              })
            }
            id="model"
            name="model"
            placeholder="Car Model"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            value={selectedCar?.carPrice || ""}
            onChange={(e) =>
              setSelectedCar({
                ...selectedCar,
                carPrice: e.target.value,
              })
            }
            id="price"
            name="price"
            placeholder="Product Price"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={selectedCar?.carImage || ""}
            onChange={(e) =>
              setSelectedCar({
                ...selectedCar,
                carModel: e.target.value,
              })
            }
            id="image"
            name="image"
            placeholder="Car Image"
          />
        </div>
        <button type="submit" style={{ background: "#007fcc" }}>
          <b>Update Product</b>
        </button>
        <br></br>
        <br></br>
      </form>
      <AllCars cs={cs} onClickForUpdateEvent={onClickForUpdateFunc} SetCars={setCars}></AllCars>
    </div>
  );
}
