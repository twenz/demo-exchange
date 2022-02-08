import Exchange from "./Exchange";
import Market from "./Market";

const bastpath = "market"
const routes = [
  {
    path: bastpath,
    // index: true,
    // element: Market,
    components: [
      {
        // path: ':',
        // exact: true,
        index: true,
        element: Market
      },
      {
        path: ':exc',
        element: Exchange
      },
      // {
      //   path: 'BUSD_THB',
      //   element: Exchange
      // },
      // {
      //   path: 'USDT_THB',
      //   element: Exchange
      // }
    ]
  },
  // {
  //   path: bastpath + '/BTC_THB',
  //   exact: true,
  //   component: <Exchange />
  // }
]

export default routes