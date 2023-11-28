import { FC } from 'react';

const TeamSchedule: FC = () => (
  <div>
    <iframe
      allowFullScreen
      srcDoc='<html>

      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="stylesheet" href="https://widgets.sportmonks.com/css/app.css">
      </head>

      <body>
          <div id="sportmonks-widget" data-widget="team-schedule" data-team="5618"
              data-info="Nuu5itEQ8ztzwqvHkG6E18R/AOcucgO0WVcTarnk0iwuC6vD1NPSEJB8fwCTHmBJsoWs5sXWIyWG1FnZxsO9ikNitgoV7xjtHskGTzDWvSISx1WM7FM+DDAc5hHYIA3Mk8Sy9UPK6/t1ps4IwH4J1otYK+Orr+h+f4e5uN5lY+TGxL4Bc1MIyMMReZkJL/VvRXc0tUUqnn5auN1hdfXxoD9zXk9dJX8wHOU5kuCaTzg6MxvCQkJL3ct15AACmDEn25f2rievA5xsUqgSUHFgBfxkxkz+93xMT3H5xOgS/g5Ik1ecJRysHSxLyfCbThJjOmy1Iytt6wRaA5ysmtWvtVQu4toom91nPFFegR9ch3/izRwC+ChVmw7fCHoUrLyB+KSbHocwBVIFQ7lohcbBwrJ+fQiy5XN/+q1tkO90CzAldo9iWv7QasY8bV/GMbm3SAKHwS2A1KCmXBZkmOZs84upO+TzwnOWuK1NY0GEjlDJH/6O/ia1x7ubxqBeAquH6PRbMY89M/UlN/xdJKp3Z2QeJPSmD+wfcTBLCmh7hROIOQa/Ixvw3DfqKIhgdBb+PMk5l2q1bakoPEPgIhRKF7EerkZpoxH4/LynACxZoykcj0j6l59z984X53pabN8ciVpTdqkTe1WEdPXPVMM1WqUwC/B2/ck+Xn9BjLm44YM=">
          </div>
          <script type="text/javascript" src="https://widgets.sportmonks.com/js/team/seasonSchedule.js"></script>
      </body>

      </html>
    '
    ></iframe>
  </div>
);

export default TeamSchedule;
