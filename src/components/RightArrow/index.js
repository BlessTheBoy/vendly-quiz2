import './style.css';

function RightArrow({trigger, activeIndex}) {
    return (
        <div className="rightArrow" onClick={() => trigger( activeIndex + 1)}>
          <svg
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5871 15.7826L0.616394 14.4125L5.25205 7.89169L0.616394 1.37044L1.5871 0.000366211L7.19637 7.89169L1.5871 15.7826Z"
              fill="#00D0BE"
            />
          </svg>
        </div>
    )
}

export default RightArrow
