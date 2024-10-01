const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const methodOverride = require("method-override");

const app = express();

app.use(cors());
app.use(methodOverride());
app.use(express.json());
app.use(morgan("dev")); // 로그를 찍는 모듈

app.use((req, res, next) => {
  const error = new Error("존재하지 않는 API 경로입니다.");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  if (error.status) {
    res.status(error.status).json({ msg: error.message });
    return;
  }

  res.status(500).json({ msg: "서버 내부 오류" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
