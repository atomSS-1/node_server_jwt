"use strict";
var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const { Users } = require("../models");
const { hash, compareHash } = require("../utils/hash");
const { signJwt } = require("../utils/jwt");

/* 로그인 라우터 */

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ where: { email } });
  // 아이디가 db에 존재 하면
  if (user) {
    // hash 값을 비교한다
    const match = await bcrypt.compare(password.toString(), user.password);

    if (match) {
      //jwt 발행한다.
      const token = await signJwt(user, next);
      console.log("match");
      res.status(200).send({ "사용자 정보": { email: user.email }, token });
    } else {
      //user가 없다면
      console.log(1231);
      res.status(401).send("실패");
    }
  }
});

/* 회원가입(회원정보 임의 삽입) 라우터*/
router.post("/insert", async (req, res, next) => {
  const { email, password } = req.body;
  //이메일 중복 확인
  const queryId = await Users.findOne({ where: { email } });
  //이메일 중복 되지 않을시
  if (!queryId) {
    //비밀번호를 해싱한다
    const hashedPassword = await hash(password, next);
    // 데이터 베이스에 아이디와 같이저장한다
    try {
      await Users.create({
        email,
        password: hashedPassword,
      });
      res.status(200).send("성공");
    } catch (err) {
      console.log(err);
      res.status(500).send("삽입 실패");
    }
  } else {
    //이메일이 중복 될시
    res.status(401).send("이메일 중복");
  }
});

module.exports = router;
