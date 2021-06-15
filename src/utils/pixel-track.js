import ReactPixel from "react-facebook-pixel";

export const pixelTrackDefault = (type, data) => {
  ReactPixel.track(type, data);
};

export const pixelTrackCustom = (event, data) => {
  ReactPixel.trackCustom(event, data);
};
