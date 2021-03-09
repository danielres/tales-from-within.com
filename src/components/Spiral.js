export function Spiral() {
  return (
    <div className="relative z-50">
      <div className="rotate"></div>
      <style jsx>
        {`
          .rotate {
            position: fixed;
            z-index: 0;
            width: 2000px;
            height: 2000px;
            top: -800px;
            left: 00px;
            animation: spin 150s linear infinite;
            background-image: url("/spiral.png");
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
          }

          @keyframes spin {
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}
