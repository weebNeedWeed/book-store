import { useState, useEffect } from "react";

function useScrollStatus() {
  const [yOffset, setYOffset] = useState(0);

  // false: scroll to footer
  // true: scroll to top
  const [scrollStatus, setScrollStatus] = useState(true);

  // Nếu yOffset hiện tại bé hơn state yOffset đã set trước đó
  // thì sẽ tính là true (scroll lên trên)
  useEffect(() => {
    window.onscroll = function () {
      const pageYOffset = window.pageYOffset;

      setScrollStatus(pageYOffset < yOffset);
      setYOffset(pageYOffset);

      if (pageYOffset === 0) setScrollStatus(true);
    };

    return () => {
      window.onscroll = null;
    };
  });

  return scrollStatus;
}

export default useScrollStatus;
