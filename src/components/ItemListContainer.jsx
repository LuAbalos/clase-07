import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { getData } from "../js-components/products";
import ItemList from './ItemList'
import customFetch from "../js-components/customFetch"
import {products} from '../js-components/products'
import { useParams } from "react-router-dom";


const ItemListContainer= () => {

  const [dato, setDato] = useState ([]);
  const { idCategory } = useParams ();
  
  console.log(idCategory);
  console.log("esto va a hacer tus productos", products);
  useEffect(() =>{
    if (idCategory == undefined){
      customFetch(2000, products)
        .then((result) => setDato(result))
        .catch((err) => console.log(err));  

    } else {
      customFetch(2000, products.filter(item => item.categoryId === parseInt(idCategory)))
        .then((result) => setDato(result))
        .catch((err) => console.log(err)); 
    }
    
  }, [idCategory])
  console.log("esto es un estado", dato)
  function onAdd (qty) {
    alert(`se agregó ${qty} productos`)
  }

  return (
    <>
      <ItemList productos={dato} />
    </>
  );
}
  
export default ItemListContainer;

