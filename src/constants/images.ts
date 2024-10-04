import generateResourcePath from "../services/generateResourcePath";

const IMAGES = {
  full_logo_vertical: generateResourcePath("/images/full_logo_vertical.svg"),
  full_logo_horizontal: generateResourcePath(
    "/images/full_logo_horizontal.svg"
  ),
  short_logo: generateResourcePath("/images/short_logo.svg"),
  login_bg: generateResourcePath("/images/login_bg.png"),
  bg_item: generateResourcePath("/images/bg_item.png"),
};

export default IMAGES;
