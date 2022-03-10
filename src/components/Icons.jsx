import "./styles/Icons.css";

const Icons = ({ technologies }) => {
  return (
    <div className="icons">
      {technologies.map((element) => {
        return (
          <div key={element.name}>
            <div className="iconContainer">
              <img
                className="iconContainer-img"
                src={element.src}
                alt={element.name}
                title={element.name}
              />
              <div className="iconContainer-level">
                <div className="levelContainer">
                  <input
                    className="levelContainer-input"
                    type="range"
                    min="0%"
                    max="100%"
                    readOnly
                    value={element.level}
                  />
                  <span className="levelContainer-percentage__percentage">
                    {element.level}
                  </span>
                  %.
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Icons;
