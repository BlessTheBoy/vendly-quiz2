import './style.css';

function LeftArrow({trigger, activeIndex}) {
    return (
        <div className="leftArrow" onClick={() => trigger( activeIndex - 1)}>
          <svg
            width="7"
            height="16"
            viewBox="0 0 7 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.60924 0L6.57953 1.37047L1.9443 7.8913L6.57953 14.4121L5.60924 15.7826L0 7.8913L5.60924 0Z"
              fill="#00D0BE"
            />
          </svg>
        </div>
    )
}

export default LeftArrow
