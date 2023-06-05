import { Dialog } from "@mui/material";
import "./lightboxImage.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";

type PropsType = {
  open?: boolean;
  onClose?: Function;
  imgSrc?: string;
};

const LightboxImage = ({ open = false, imgSrc, onClose }: PropsType) => {
  return (
    <Dialog fullScreen open={open} onClose={() => onClose?.()}>
      <div className="lightbox-image">
        <div className="lightbox-image-wrapper" onClick={() => onClose?.()}>
          <CloseOutlinedIcon style={{ right: "20px" }} />
          <FullscreenOutlinedIcon style={{ right: "50px" }} />
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </Dialog>
  );
};

export default LightboxImage;
