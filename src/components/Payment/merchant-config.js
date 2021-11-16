const CONFIG = {
  merchant: {
    mid: process.env.REACT_APP_PAYTM_MID,
    name: "Lofty Dreams Recliners",
    logo: "",
    redirect: true,
  },
  mapClientMessage: {},
  labels: {},
  payMode: {
    labels: {},
    filter: {
      exclude: [],
    },
    order: ["NB", "CARD", "LOGIN"],
  },
  flow: "DEFAULT",
};

export default CONFIG;
