import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  fetchDrinks,
  fetchFastfood,
  fetchBestSeller,
  editDrink,
  deleteDrink,
  editFood,
  deleteFood,
  editBest,
  deleteBest,
  
} from "../store/createTable";
function ProductAdmin({tada}) {

  const [bestSeller, setBestSeller] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [fastFood, setFastFood] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDrinks());
    dispatch(fetchBestSeller());
    dispatch(fetchFastfood());
 
  }, []);

  const drink = useSelector((state) => state.listTable.drinks);
  const food = useSelector((state) => state.listTable.fastfood);
  const best = useSelector((state) => state.listTable.bestSeller);

  let drinkCounter = 0;
  let bestCounter = 0;
  let foodCounter = 0;

  const [editDrink,setEditDrink] = useState(null)

  const handleDeleteDrink = (drinkId) => {
    dispatch(deleteDrink(drinkId))
      .then((res) => {
        res.status ="success"
      })
      .catch((error) => {
      });
  };


  const handleEditDrink = (updatedDrink) => {
    dispatch(editDrink(updatedDrink))
      .then(() => {})
      .catch((error) => {});
  };

  const handleDeleteFastFood = (foodId) => {
    dispatch(deleteFood(foodId))
      .then((res) => {
        res.status ="success"
      })
      .catch((error) => {
      });
  };


  const handleDeleteBestSeller = (bestId) => {
    dispatch(deleteBest(bestId))
      .then((res) => {
        res.status ="success"
      })
      .catch((error) => {
      });
  };


  return (
    <div className="renderDataDasboard">
      <table>
        <thead>
          <tr
            style={{
              backgroundColor: "black",
              height: "40px",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <th> #</th>
            <th> Name </th>
            <th> Image </th>
            <th>Price </th>
            <th> Type</th>
            <th>Detail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {drink.map((e) => {
            drinkCounter++;
            return (
              <tr style={{ textAlign: "center" }} key={e.id}>
                <td className="idAdmin"> {drinkCounter} </td>
                <td className="nameAdmin"> {e.name} </td>
                <td className="imageAdmin">
                  <img style={{ width: "50px" }} src={e.img} alt="" />
                </td>
                <td className="priceAdmin"> {e.price} </td>
                <td> {e.type}</td>
                <td className="detailAdmin"> {e.detail} </td>
                <td className="actionAdmin">
                  <ul style={{ padding: "5px 0px 0px 0px" }}>
                    <li className="editProductAdmin"onClick={() => tada(e)}> Sửa </li>
                    <li className="deleteProductAdmin"  onClick={() => handleDeleteDrink(e.id)}> Xóa</li>
                  </ul>
                </td>
              </tr>
            );
          })}
          {best.map((e) => {
            bestCounter++;
            return (
              <tr style={{ textAlign: "center" }} key={e.id}>
                <td className="idAdmin"> {drink.length + bestCounter} </td>
                <td className="nameAdmin"> {e.name} </td>
                <td className="imageAdmin">
                  <img style={{ width: "50px" }} src={e.img} alt="" />
                </td>
                <td className="priceAdmin"> {e.price} </td>
                <td> {e.type}</td>
                <td className="detailAdmin"> {e.detail} </td>
                <td className="actionAdmin">
                  <ul style={{ padding: "5px 0px 0px 0px" }}>
                    <li
                      className="editProductAdmin"
                      onClick={()=>tada(e)}
                    >
                      {" "}
                      Sửa{" "}
                    </li>
                    <li
                      className="deleteProductAdmin"
                      onClick={()=>handleDeleteBestSeller(e.id)}
                    >
                      {" "}
                      Xóa
                    </li>
                  </ul>
                </td>
              </tr>
            );
          })}

          {food.map((e) => {
            foodCounter++;
            return (
              <tr style={{ textAlign: "center" }} key={e.id}>
                <td className="idAdmin">
                  {" "}
                  {drink.length + best.length + foodCounter}
                </td>
                <td className="nameAdmin"> {e.name} </td>
                <td className="imageAdmin">
                  <img style={{ width: "50px" }} src={e.img} alt="" />
                </td>
                <td className="priceAdmin"> {e.price} </td>
                <td> {e.type}</td>
                <td className="detailAdmin"> {e.detail} </td>
                <td className="actionAdmin">
                  <ul style={{ padding: "5px 0px 0px 0px" }}>
                     
                    <li className="editProductAdmin" onClick={()=>tada(e)} > Sửa </li>
                    <li className="deleteProductAdmin" onClick={()=>handleDeleteFastFood(e.id)}> Xóa</li>
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductAdmin;
