'use strict';

export function handler(...args) {
  event(vars, (req, res) => {
    console.log(req.body);

    res.json(200, {
      message: 'success'
    });
  }, ...args);
}
