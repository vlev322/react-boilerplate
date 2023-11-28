import { FC } from 'react';

const TeamStandings: FC = () => (
  <div>
    <iframe
      allowFullScreen
      srcDoc='<html>

      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="https://widgets.sportmonks.com/css/app.css">
      </head>

      <body>
          <div id="sportmonks-widget" data-widget="team-standings" data-team="5618"
              data-info="2vBsE59F4rXEai8oxpZQSm8gG0mf5lbWRSipJCe4KwXscPD2hOsduxValFyVc826XHLf+xYiC1Xl9ubyIv+5PmyM1I3Z89bGv+6QHtfbc2Ms2d8NskD9qgEo+qfSU4tOPhUq9Gk5INRFJ39fbzYJRc9lzgg24/JbuMLA+PCMI60jix0XYnejj8V7eI4ITAIAOZFNAY20RqNkMz2ekIOxPWK+BsyLDwYONAUUZ6z8rRQnJLNwVSGggavwJTMPa2w7t7cmp7U+0eeZk8PeZh6Tb27lLlxYVdGvGVo2iHGTTsr41t67zdpeOCOPyhxDLArsl5il27d/2N0nufmFMykivzv2Lhu9CAJEYNAWJMb4I6Y92aKF9hPwTAC7GLurH9au2Sp4GC6l1WU9+5n8NcUQRWC66Rhb8j0cwXvfnQSIB4nu4Ds2k3w/u/ue9uT9pQLHY3+CXwZdKUzXS5aHh6lmjWQA0hs4GO2o0fldpMDVJRlSTSQTYBDMwjN4ltq1QssvxF126QaoOiqTXjAr3WILMGS+WMx+GjUI4UyFj0ISKpEBcsRRJUOnCGXgRMZPHdeZcPhzmfd5n9HT0wjk1E0H3p+aWGCG7v2ArJRCz5FYRJ1TbimmDbifT1bQ8m0YKcYXn5RIugJU2ZfjV7bY2XkiE6fn1WkiN0znvSOcnURqUww="
              data-colors="#010028,#1893C1,#D0D0D9,#343353"></div>
          <script type="text/javascript" src="https://widgets.sportmonks.com/js/team/standings.js"></script>
      </body>

      </html>
    '
    ></iframe>
  </div>
);

export default TeamStandings;
