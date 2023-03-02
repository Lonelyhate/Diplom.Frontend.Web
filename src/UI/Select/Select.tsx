import React, {
  FC,
  useRef,
  useEffect,
  ReactHTMLElement,
  useState
} from "react";
import "./Select.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineChevronDown } from "react-icons/hi";
import { MdClear } from "react-icons/md";
import cn from "classnames";

type item = {
  name: string;
  value?: string;
  id?: number;
};

interface ISelect {
  placeholder: string;
  height?: number;
  items: item[];
  currentElement: any
  setCurrentElement: (element: any) => void
}

const Select: FC<ISelect> = ({ placeholder, height = 44, items, currentElement, setCurrentElement }) => {
  const [active, setActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [elements, setElements] = useState<item[]>(items);
  const [tempCurrentElement, setTempCurrentElemtn] = useState<item | null>(
    null
  );
  const [clickedElement, setClickedElement] = useState<boolean>(false);
  const selectRef = useRef(null);

  const searchItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClickedElement(false);
    setCurrentElement(null);
    setInputValue(e.target.value);
  };

  const onClickElement = (item: item) => {
    setCurrentElement(item);
    setTempCurrentElemtn(item);
    setActive(false);
    setClickedElement(true);
  };

  const onClickOpenList = () => {
    setActive(!active);
  };

  const clearValue = () => {
    setInputValue("");
    setCurrentElement(null);
    setTempCurrentElemtn(null);
  };

  useEffect(() => {
    setElements(items);
    if (inputValue) {
      setElements(
        elements.filter((el) =>
          el.name.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }
    if (currentElement) {
      setInputValue(currentElement.name);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (clickedElement) {
      } else {
        setCurrentElement(tempCurrentElement);
      }
      if (
        selectRef.current &&
        !event.composedPath().includes(selectRef.current)
      ) {
        if (!currentElement) {
          setInputValue("");
        }
        setActive(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, [inputValue, items, currentElement]);

  return (
    <div
      ref={selectRef}
      className={cn("select", {
        active: active
      })}
      style={{ height }}
    >
      <div className='select__body'>
        <input
          value={inputValue}
          onChange={(e) => {
            searchItems(e);
          }}
          onFocus={() => {
            setActive(true);
          }}
          onBlur={() => {
            //onBlurElement()
          }}
          type='text'
          className='select__input'
          placeholder={placeholder}
        />
        {inputValue && (
          <button onClick={clearValue} className='select__clear'>
            <MdClear size={25} />
          </button>
        )}
        <button className='select__add'>
          <AiOutlinePlus size={25} />
        </button>
        <button onClick={onClickOpenList} className='select__open'>
          <HiOutlineChevronDown size={25} />
        </button>
      </div>
      <ul
        className={cn("select__list", {
          active: active
        })}
      >
        {elements.length > 0 ? (
          elements.map((item) => (
            <li
              key={item.name}
              onClick={() => onClickElement(item)}
              className='select__item'
            >
              {item.name}
            </li>
          ))
        ) : (
          <div className='select__empty'>Не найдено</div>
        )}
      </ul>
    </div>
  );
};

export default Select;
