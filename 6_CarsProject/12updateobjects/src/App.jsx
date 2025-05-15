  import { useState, useEffect } from 'react'


  function App() {
    
    const [car, setCar] = useState({company : "Ford"})

    const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/HzVbQuRTuWs?autoplay=1&mute=0&loop=1&playlist=HzVbQuRTuWs");

    // let handleCompany = (e) => {
    
    //   setCar((prevCar) => prevCar = {...car, company : e.target.value});
    // }
    
    
    // let handleModel = (e) => {
    
    //   setCar((prevCar) => prevCar = {...car, model : e.target.value});
    // }
    
    
    // let handleYear = (e) => {
    
    //   setCar((prevCar) => prevCar = {...car, year : e.target.value});
    // }
    
    

    const handleCarSelection = (type, value) => {

      setCar((prev) => ({...prev, [type]: value,}));
    };

    const getTextStyleClass = (company) => {
  switch (company) {
    case "Ford":
      return "ford-style";
    case "Dodge":
      return "dodge-style";
    case "Nissan":
      return "nissan-style";
    case "Toyota":
      return "toyota-style";
    case "BMW":
      return "bmw-style";
    case "Alfa Romeo":
      return "alfa-romeo-style";
    default:
      return "default-style";
  }
};

    useEffect(() => {
    switch (car.company) {
      case "Dodge":
        setVideoUrl("https://www.youtube.com/embed/loSnXQRxk1Q?autoplay=1&controls=0&mute=0&loop=1&playlist=loSnXQRxk1Q");
        break;
      case "Nissan":
        setVideoUrl("https://www.youtube.com/embed/QZb7Gra8hc4?autoplay=1&controls=0&mute=0&loop=1&playlist=QZb7Gra8hc4");
        break;
      case "Toyota":
        setVideoUrl("https://www.youtube.com/embed/A7YMjWl77Ek?autoplay=1&controls=0&mute=0&loop=1&playlist=A7YMjWl77Ek");
        break;
      case "Alfa Romeo":
        setVideoUrl("https://www.youtube.com/embed/dMXBsxBIQHA?autoplay=1&controls=0&mute=0&loop=1&playlist=dMXBsxBIQHA");
        break;
      case "BMW":
        setVideoUrl("https://www.youtube.com/embed/ewAKxXoAEmc?autoplay=1&controls=0&mute=0&loop=1&playlist=ewAKxXoAEmc");
        break;
      default:
        setVideoUrl("https://www.youtube.com/embed/HzVbQuRTuWs?autoplay=1&controls=0&mute=0&loop=1&playlist=HzVbQuRTuWs");
    }
  }, [car.company]);


    
    return (

      <>
        
        <h2>Selected car is : <b>{car.company}</b></h2>
        <h3>Select Your Car Followed By Company From Below: </h3>

        <div className="video-container" >
        <iframe
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          width="100%"
          height="100%"
          src={videoUrl}
          title="Car Video" 
        ></iframe>
      </div>


        <div>

          {/* <h4>Company : </h4> */}
          <select onChange = {(e) => handleCarSelection("company", e.target.value)}>
                      
            <option value={null}>Select Car Company</option>
            <option type = "text">Dodge</option>        
            <option type = "text">Nissan</option>
            <option type = "text">Toyota</option>
            <option type = "text">Alfa Romeo</option>
            <option type = "text">BMW</option>
              
            </select>
        </div>

        {/* <div>

          <h4>Model : </h4>
          <select onChange = {(e) => handleCarSelection("model", e.target.value)}>
                      
            <option value={null}>Select Car Model</option>
            <option type = "text">SRT Demon</option>        
            <option type = "text">Skyline GT</option>
            <option type = "text">Supra mk5</option>
            <option type = "text">Coupe</option>
            <option type = "text">M5 Competition</option>
              
            </select>
        </div>  

        <div>

          <h4>Year : </h4>
          <select onChange = {(e) => handleCarSelection("year", e.target.value)}>
                      
            <option value={null}>Select Car Model Year</option>
            <option type = "number">2024</option>        
            <option type = "number">2021</option>
            <option type = "number">2017</option>
            <option type = "number">2023</option>
            <option type = "number">2024</option>
              
            </select>
        </div> */}

        <div className={`car-details ${getTextStyleClass(car.company)}`}>
          <h3>Company: {car.company}</h3>
          {/* <h3>Model: {car.model}</h3>
          <h3>Year: {car.year}</h3> */}
        </div>


      </>
    )
  }

  export default App
