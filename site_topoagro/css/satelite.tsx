import React from 'react';

interface SatelliteProps {
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  signalColor?: string;
}

const SatelliteComponent = (props: SatelliteProps) => {
  const {
    size = 300,
    primaryColor = '#000000',
    secondaryColor = '#006b3d',
    signalColor = '#6b7c85'
  } = props;

  return (
    <div className="container">
      <div className="satellite-wrapper" style={{ width: `${size}px`, height: `${size}px` }}>
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="satellite-svg"
        >
          {/* Tudo dentro deste grupo rotaciona junto, garantindo alinhamento total */}
          <g transform="rotate(-45 100 100)">
            
            {/* Painéis Solares com o vão solicitado */}
            <g className="solar-panels">
              <rect x="15" y="85" width="55" height="30" rx="1" fill={primaryColor} />
              <rect x="19" y="88" width="14" height="24" fill={secondaryColor} />
              <rect x="37" y="88" width="14" height="24" fill="white" fillOpacity="0.8" />
              <rect x="55" y="88" width="10" height="24" fill={secondaryColor} />

              <rect x="130" y="85" width="55" height="30" rx="1" fill={primaryColor} />
              <rect x="134" y="88" width="10" height="24" fill={secondaryColor} />
              <rect x="148" y="88" width="14" height="24" fill="white" fillOpacity="0.8" />
              <rect x="166" y="88" width="14" height="24" fill={secondaryColor} />
            </g>

            {/* Corpo Central e Antena */}
            <g className="body-group">
              <circle cx="100" cy="78" r="12" fill={primaryColor} />
              <circle cx="100" cy="100" r="22" fill={primaryColor} />
              <line 
                x1="100" y1="122" 
                x2="100" y2="150" 
                stroke={primaryColor} 
                strokeWidth="6" 
                strokeLinecap="round" 
              />
              <circle cx="100" cy="155" r="6" fill={signalColor} />
            </g>

            {/* ONDAS: Agora dentro do grupo rotacionado, facilitando o alinhamento 
                Elas são desenhadas horizontalmente em relação ao eixo da antena (y=155)
            */}
            <g className="signals-group">
              <path 
                className="signal-wave wave-1"
                d="M85 175 A 25 25 0 0 0 115 175"
                stroke={secondaryColor}
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              <path 
                className="signal-wave wave-2"
                d="M75 190 A 40 40 0 0 0 125 190"
                stroke={signalColor}
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </g>
        </svg>
      </div>

      <style>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }

        .satellite-svg {
          width: 100%;
          height: 100%;
          animation: float 6s ease-in-out infinite;
        }

        .signal-wave {
          opacity: 0;
          /* Origem da transformação é a ponta da antena (cx=100, cy=155) */
          transform-origin: 100px 155px;
        }

        .wave-1 {
          animation: pulse-aligned 2s infinite;
        }

        .wave-2 {
          animation: pulse-aligned 2s infinite 0.6s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, -10px); }
        }

        @keyframes pulse-aligned {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          40% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(1.4) translateY(10px);
          }
        }
      `}</style>
    </div>
  );
};

export default SatelliteComponent;