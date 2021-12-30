//import { useSearchParams } from "react-router-dom";
//import styled from "styled-components";

export default function Filter() {
  /* const [searchParam, setSearchParam] = useSearchParams();

  const handleClick = (e: any) => {
    setSearchParam(`limit=${page.current * 8}`);  // trigger useLocation()
  } */

  return (
    <div>
      <button>
        Khu vực
      </button>
      <button>
        Giá chổ ở
      </button>
      <button>
        Sắp xếp
      </button>
    </div>
  )
}
