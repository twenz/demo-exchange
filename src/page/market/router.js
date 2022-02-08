import Exchange from "./Exchange";
import Market from "./Market";

const bastpath = "market"
const routes = [
  {
    path: bastpath,
    components: [
      {
        index: true,
        element: Market
      },
      {
        path: ':exc',
        element: Exchange
      },
    ]
  },
]

export default routes