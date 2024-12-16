import React from "react";

const Card = ({ title, value, percentage, icon, isPositive }) => {
  return (
    <div className="card-box col-md-3" >
        <div style={styles.card}>
      <div >
        <p style={styles.title}>{title}</p>
        <h2 style={styles.value}>{value}</h2>
        <p style={{ color: isPositive ? "green" : "red", fontSize: "14px" }}>
          {isPositive ? "+" : ""}
          {percentage}%
        </p>
      </div>
      <div style={styles.iconContainer}>{icon}</div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
    boxShadow: "rgb(0 0 0 / 5%) 0px 3.4px 5px",
    
  },
  title: {
    fontSize: "14px",
    color: "#8b8b8b",
    margin: 0,
  },
  value: {
    fontSize: "24px",
    color: "#000",
    margin: "5px 0",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4FD1C5",
    color: "#fff",
    borderRadius: "50%",
    height: "40px",
    width: "40px",
  },
};

export default Card;
