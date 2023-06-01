import qrtImage from "../assets/img/image-qr-code.png"

export default function Card(){
  return(
    <div className="card">
      <img src={qrtImage} title="QR code" alt="QR code"/>
      <div className="card-body">
        <h4>Improve your front-end skills by building projects</h4>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}