const express = require('express');
const app = express();

app.get('/generateList', (req, res) => {
  const startCountry = req.query.country || '';
  const endCountry = req.query.endCountry || '';
  const startState = req.query.state || '';
  const endState = req.query.endState || '';
  const startDistrict = req.query.district || '';
  const endDistrict = req.query.endDistrict || '';
  const startSchool = req.query.school || '';
  const endSchool = req.query.endSchool || '';
  const startClass = req.query.class || '';
  const endClass = req.query.endClass || '';
  const startSection = req.query.section || '';
  const endSection = req.query.endSection || '';
  const startRollNo = parseInt(req.query.rollNo) || 1;
  const endRollNo = parseInt(req.query.endRollNo) || 99;
  const separator = req.query.separator || '-';

  const list = [];

  for (let a = startCountry; a <= endCountry; a++) {
    for (let b = startState; b <= endState; b++) {
      for (let c = startDistrict; c <= endDistrict; c++) {
        for (let d = startSchool; d <= endSchool; d++) {
          for (let i = startClass; i <= endClass; i++) {
            if (!i) {
              i = '0';
            }
            for (let j = startSection; j <= endSection; j++) {
              if (!j) {
                j = '0';
              }
              for (let k = startRollNo; k <= endRollNo; k++) {
                const countryStr = a ? `${a}${separator}` : '';
                const stateStr = b ? `${b}${separator}` : '';
                const districtStr = c ? `${c}${separator}` : '';
                const schoolStr = d ? `${d}${separator}` : '';
                const code = `${countryStr}${stateStr}${districtStr}${schoolStr}${i}${separator}${j}${separator}${k}`;
                list.push({ code });
              }
            }
          }
        }
      }
    }
  }

  res.send(list);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
