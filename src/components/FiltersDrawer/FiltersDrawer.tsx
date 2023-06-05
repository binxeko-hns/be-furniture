import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import "./filterDrawer.scss";
import { rooms } from "../../configs/constants";

type PropsType = {
  open: boolean;
  onOpen?: Function;
  onCLose?: Function;
  onChangeRangePrice?: Function;
  rangePrice?: number[];
  materialList?: string;
  checkRooms?: boolean[];
  onResetRangePrice?: Function;
  onChangeInputPriceMin?: Function;
  onChangeInputPriceMax?: Function;
  onCheckRoom?: Function;
  onChooseMaterial?: Function;
};

const initMin = 100;
const initMax = 1900;

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

const _materialsList = [
  "Aluminum",
  "Leadther",
  "Metal",
  "Textile",
  "Velvet",
  "Wood",
];

const FiltersDrawer = ({
  open = false,
  onOpen,
  onCLose,
  onChangeRangePrice,
  rangePrice,
  materialList,
  checkRooms,
  onChangeInputPriceMax,
  onChangeInputPriceMin,
  onResetRangePrice,
  onCheckRoom,
  onChooseMaterial,
}: PropsType) => {
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
                {_materialsList.map((i) => (
                  <li>
                    <label
                      className={materialList?.includes(i) ? "active" : ""}
                      onClick={() => onChooseMaterial?.(i)}
                    >
                      {i}
                    </label>
                  </li>
                ))}
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
                onChange={(event, newValue, activeThumb) =>
                  onChangeRangePrice?.(event, newValue, activeThumb)
                }
                disableSwap
              />
              <div className="input-price-wrapper">
                <div className="input">
                  <input
                    type="number"
                    value={rangePrice?.[0]}
                    onChange={(e) => onChangeInputPriceMin?.(e)}
                  />
                  <i>$</i>
                </div>
                <div className="input">
                  <input
                    type="number"
                    value={rangePrice?.[1]}
                    onChange={(e) => onChangeInputPriceMax?.(e)}
                  />
                  <i>$</i>
                </div>
              </div>
              {rangePrice?.[0] !== initMin ||
                (rangePrice?.[1] !== initMax && (
                  <div className="range-slider-action">
                    <button onClick={() => onResetRangePrice?.()}>Reset</button>
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
                {rooms.map((room, index) => (
                  <li>
                    <span>
                      <input
                        type="checkbox"
                        checked={checkRooms?.[index]}
                        onChange={() => onCheckRoom?.(index)}
                      />
                      {room}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default FiltersDrawer;
