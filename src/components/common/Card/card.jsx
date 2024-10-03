import { Tooltip } from "@nextui-org/react";
import { MousePointerClick, CircleAlert } from "lucide-react";

const Card = ({ title, value, color }) => {
  return (
    <div className="px-10 py-4 bg-white rounded-xl mb-3 flex justify-between">
      <div>
        <h2 className="text-xs font-semibold text-slate-500 mb-1 flex gap-1">
          <div>{title}</div>{" "}
          <div className="bg-white rounded-full ">
            <Tooltip
              className="bg-white drop-shadow-md px-2 rounded-md border text-xs"
              content="tooltip"
            >
              <CircleAlert className="px-0" size={16} />
            </Tooltip>
          </div>
        </h2>
        <p className="text-lg font-bold">{value}</p>
      </div>
      <div className="flex items-center">
        <div
          className={`bg-emerald-200 text-emerald-500 ${color} rounded w-8 h-8 flex items-center justify-center`}
        >
          <MousePointerClick size={16} />
        </div>
      </div>
    </div>
  );
};
export default Card;
