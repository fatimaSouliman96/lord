
import ratShape from '../../../public/rate-shape-2.png'

export default function RatedShape() {
  return (
    <div
      className="tp-rated-shape-2 w-44 h-44 hidden sm:block absolute 
      top-[10rem]
      translate-x-[-60%]
       right-[60%] "
      style={{
        textAlign: "left",
        WebkitTextSizeAdjust: "100%",
        WebkitTapHighlightColor: "transparent",
        fontFamily: '"Poppins", serif',
        fontSize: "15px",
        fontWeight: 400,
        color: "#5F6368",
        lineHeight: 1.3,
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/assets/img/rate/rated-bg.jpg')",
          borderRadius: "60px",
          height: "980px",
          overflow: "hidden",
          marginLeft: "60px",
          marginRight: "60px",
        }}
      ></div>

      <div className="
       w-full h-full flex justify-center items-start">
        <img
          src={ratShape}
          alt="Rate Shape"
          className="animate-float"
          style={{ maxWidth: "100%", pointerEvents: "none" }}
        />
      </div>

      {/* CSS الانميشن */}
      <style>
        {`
          @keyframes float {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

