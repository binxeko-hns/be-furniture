import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import "./filterDrawer.scss";

type PropsType = {
  open: boolean;
  onOpen?: Function;
  onCLose?: Function;
};

const initMin = 100;
const initMax = 1900;
const minDistance = 10;

const PrettoSlider = styled(Slider)({
  color: "#433779",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const FiltersDrawer = ({ open = false, onOpen, onCLose }: PropsType) => {
  const [rangePrice, setRangePrice] = useState<number[]>([initMin, initMax]);
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setRangePrice([
        Math.min(newValue[0], rangePrice[1] - minDistance),
        rangePrice[1],
      ]);
    } else {
      setRangePrice([
        rangePrice[0],
        Math.max(newValue[1], rangePrice[0] + minDistance),
      ]);
    }
  };
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={() => onCLose?.()}
      onOpen={() => onOpen?.()}
    >
      <div className="filter-drawer">
        <div className="filter-drawer-wrapper">
          <div className="material-wrapper">
            <div className="material-wrapper-inner">
              <label>Materials</label>
              <ul>
                <li>
                  <label>Alumium</label>
                </li>
                <li>
                  <label>Leadther</label>
                </li>
                <li>
                  <label>Metal</label>
                </li>
                <li>
                  <label>Textile</label>
                </li>
                <li>
                  <label>Velvet</label>
                </li>
                <li>
                  <label>Wood</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider">
            <hr />
          </div>
          <div className="slider-range">
            <div className="slider-range-wrapper">
              <h6>Filter by price</h6>
              <PrettoSlider
                min={initMin}
                max={initMax}
                getAriaLabel={() => "Minimum distance"}
                value={rangePrice}
                onChange={handleChange}
                disableSwap
              />
              <div className="input-price-wrapper">
                <div className="input">
                  <input type="number" value={rangePrice[0]} />
                  <i>$</i>
                </div>
                <div className="input">
                  <input type="number" value={rangePrice[1]} />
                  <i>$</i>
                </div>
              </div>
              {rangePrice[0] !== initMin ||
                (rangePrice[1] !== initMax && (
                  <div className="range-slider-action">
                    <button>Reset</button>
                  </div>
                ))}
            </div>
          </div>
          <div className="divider">
            <hr />
          </div>
          <div className="attributes">
            <div className="attributes-wrapper">
              <label>Room</label>
              <ul>
                <li>
                  <span>
                    <input type="checkbox" />
                    Bedroom
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" />
                    Dining room
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" />
                    Kitchen room
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" />
                    Living room
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" />
                    Office
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default FiltersDrawer;
