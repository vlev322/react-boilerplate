import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from '@/pages/layout';
import Main from '@/pages/main';
import NotFound from '@/pages/NotFound';
import MatchCentre from '@/pages/match-centre';
import TeamStandings from '@/pages/team-standings';
import TeamSchedule from '@/pages/team-schedule';

export default [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Main /> }],
  },
  {
    path: '/match-centre',
    element: <MatchCentre />,
  },
  {
    path: '/team-standings',
    element: <TeamStandings />,
  },
  {
    path: '/team-schedule',
    element: <TeamSchedule />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
] as RouteObject[];
