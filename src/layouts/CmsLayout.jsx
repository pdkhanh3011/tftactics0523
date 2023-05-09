import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "store/slices/apiSlice";
import { useSelector } from "react-redux";


function CmsLayout() {
  const { isLoading } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>{isLoading || <Outlet />}</div>
  );
}

export default CmsLayout;