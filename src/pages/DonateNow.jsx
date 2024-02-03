import React from "react";
// import "../styles/Donate.css"

const DonateNow = () => {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "hsl(212, 45%, 89%)",
        display: "flex",
        fontFamily: '"Outfit", serif',
        justifyContent: "center",
        height: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        className="carddonate"
        style={{
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0 10px 40px hsl(220, 15%, 55%)",
          padding: "4%",
          textAlign: "center",
          width: "575px",
          alignItems: "center",
        }}
      >
        <img
          src="https://iili.io/HZsWb7S.png"
          id="qr"
          alt=" qr code"
          style={{
            borderRadius: "15px",
            height: "375px",
            width: "375px",
            marginBottom: "3%",
          }}
        />

        <div
          className="upi"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://iili.io/HZsWZrl.png"
            style={{ height: "10%", padding: "1px", width: "10%" }}
            alt="UPI logo"
          />
          <img
            src="https://iili.io/HZsWQ14.png"
            style={{
              height: "20%",
              width: "15%",
              border: "none",
              borderRadius: "0",
            }}
            alt="UPI logo"
          />
          <img
            src="https://iili.io/HZsWLBf.png"
            style={{ height: "20%", padding: "5px", width: "10%" }}
            alt="UPI logo"
          />
          <img
            src="https://iili.io/HZsW6In.png"
            style={{ height: "20%", padding: "5px", width: "10%" }}
            alt="UPI logo"
          />
        </div>

        <p
          style={{
            color: "hsl(220, 15%, 55%)",
            fontSize: "25px",
            fontWeight: "400",
            padding: "15px",
          }}
        >
          Scan the QR code to complete payment
        </p>
      </div>
    </div>
  );
};

export default DonateNow;