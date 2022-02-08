import React from 'react';
import { Routes, Route, } from "react-router-dom";
import Main from '../page/Main';
import _, { isEmpty } from 'lodash'
import market from '../page/market/router'

const router = () => {
  const _router = [
    {
      path: '/',
      element: Main,
      index: true
    },
    ...market
  ]
  const initRoute = _router.map((route, i) => {
    const _route = route?.element ? { key: i, element: route.element } : { path: route?.path, key: i }
    const subRoute = _.get(route, 'components', [])
    const _SubRoute = !isEmpty(subRoute) ? subRoute.map((e, _i) => {
      const _r = <Route index={e.index || false} path={e?.path} element={<e.element simbol={e?.path ? e?.path.toLowerCase() : ''}/>} />
      return _r
    }) : null
    const setting = (
      <Route {..._route}>
        {_SubRoute}
      </Route>
    )
    return setting
  })
  return (
    <Routes  >
      {initRoute}
    </Routes>
  )
};

export default router();
