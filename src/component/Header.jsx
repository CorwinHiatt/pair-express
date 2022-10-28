import { useState } from "react";


function Header() {
    const [clothingList, setClothingList] = useState()
  const getApi = () => {
    fetch(`https://cloud-api-clothing-at.web.app/clothing`)
      .then((response) => response.json())
      .then(data =>
        {
            console.log(data)
            setClothingList(data)})
      .catch(console.error);


  }


  
    return(
    <>
    <button className="but-1" onClick={() => getApi()}>Get Clothes</button>
    
    
    
    
    </>
 )

}

export default Header;