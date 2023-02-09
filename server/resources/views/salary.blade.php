<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bảng lương</title>
  <style>
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }
  </style>
</head>
<body>
  <div>
    <table>
      <tr>
        <th>Tên</th>
        <th>Lương cơ bản (A)</th>
        <th>Hệ số lương (B)</th>
        <th>Phụ cấp (C)</th>
        <th>Tiền thưởng (D)</th>
        <th>Lương đóng bảo hiểm (E)</th>
        <th>Tháng trả lương (F)</th>
        <th>Công chuẩn (G)</th>
        <th>Số ngày tính công (H)</th>
        <th>Lương thực nhận (I)</th>
      </tr>
      <tr>
        <td>{{ $userName }}</td>
        <td>{{ number_format($salaryBasic) }} VNĐ</td>
        <td>{{ $salaryFactor }}</td>
        <td>{{ number_format($allowanceMoney) }} VNĐ</td>
        <td>{{ number_format($bonusMoney) }} VNĐ</td>
        <td>{{ number_format($insurancePremiumSalary) }} VNĐ</td>
        <td>{{ $monthPay }}</td>
        <td>{{ $totalWorkingDaysStandard }}</td>
        <td>{{ $totalWorkingDays }}</td>
        <td style="font-weight: bold">{{ number_format($totalMoneyActualReceive) }} VNĐ</td>
      </tr>
    </table>
    <br />
    <br />
    <div style="font-weight: bold; color: red">Note*: I = A * B + C + D - E * 10.5%</div>
    <div style="font-weight: bold; color: red">Nếu H < G thì I = (A * B / G) * H + C + D - E * 10.5%</div>
  </div>
</body>
</html>