import React, { useLayoutEffect, useState } from "react";
import { useClickAway } from "hooks/useClickAway";
import { areObjectsEqual } from "helpers/areObjectsEqual";
import { DropdownProps, DropdownOption } from "./Dropdown.types";
import "./Dropdown.css";

function Dropdown({
  label = "",
  options,
  value,
  changeValue,
  children,
  width = "200px",
  height = "40px",
  maxMenuHeight = "100vh",
  fullWidth = false,
}: DropdownProps) {
  const [selected, setSelected] = useState<any>(null);
  const {
    ref: dropdownRef,
    active: isDropdownActive,
    toggle: toggleDropdown,
  } = useClickAway();

  const isObject = (object: any) => {
    return typeof object === "object" && !Array.isArray(object);
  };

  useLayoutEffect(() => {
    if (value) {
      const selected = options?.find((option) =>
        isObject(value)
          ? areObjectsEqual(value, option.value)
          : value === option.value
      );
      if (selected) {
        setSelected(selected?.label);
      }
    }
  }, [value]);

  const handleSelection = (newValue: any) => {
    if (changeValue) changeValue(newValue);
    toggleDropdown();
  };

  return (
    <div
      ref={dropdownRef}
      className={`dropdown__container ${fullWidth && "dropdown__full-width"}`}
      style={{ width, height }}
      onClick={toggleDropdown}
    >
      <div className="dropdown__label-container">
        <div className="dropdown__label">{label || selected || "Select"}</div>
        {/* {isDropdownActive ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
      </div>
      {isDropdownActive && (
        <div
          className="dropdown__menu"
          style={{ maxHeight: maxMenuHeight, top: `calc(${height} + 4px)` }}
        >
          {children ??
            options?.map((option: DropdownOption, index: number) => (
              <div
                key={index}
                className="dropdown__menu-item"
                onClick={() => handleSelection(option?.value)}
              >
                {option?.label ?? "--"}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
