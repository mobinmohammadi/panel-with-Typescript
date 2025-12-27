import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function LeftContent() {
  return (
    <div className="flex gap-5 flex-col bg-boxDark pt-2 pb-2 pr-3 pl-3 rounded-xs text-gray-700">
      <div className="flex border-b-2 border-b-gray-700 pb-2 justify-between items-center">
        <span className="text-xs">آدرس های ثبت شده شما</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-sm flex items-center justify-between  text-gray-900">
          <span>آذربایجان غربی.پاساژ فردوس پلاک 106</span>
          <IconButton>
            <MoreVertIcon fontSize="small" color="info" />
          </IconButton>
        </div>
        <div className="text-sm flex items-center justify-between  text-gray-900">
          <span>آذربایجان غربی.پاساژ فردوس پلاک 106</span>
          <IconButton>
            <MoreVertIcon fontSize="small" color="info" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
