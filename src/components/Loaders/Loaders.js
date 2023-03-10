import "./loaders.css"
const Loader = () => {
    return (
      <div className="containerLoader">
        <h2>Cargando..</h2>
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <svg className="svgLoader" >
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation={10} />
            <feColorMatrix
              values="
          1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 20 -10"
            />
          </filter>
        </svg>
      </div>
    );
  };
  
  export default Loader;
  