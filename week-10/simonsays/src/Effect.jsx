import { useEffect } from "react";

function Effect() {
  useEffect(() => {
    console.log("Component mount oldu");

    return () => {
      console.log("Component unmount oldu");
    };
  }, []);

  return <div>Effect</div>;
}

export default Effect;
