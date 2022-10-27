import { Spin} from "antd";
//import "antd/dist/antd.min.css";
const fallback =
<div id="loader" className="pt-10 pb-10">
    <span className="sm:text-xl text-xl">
        <Spin size="large"></Spin>
            Loading...
    </span>
</div>
export {fallback};
  

