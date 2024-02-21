require("dotenv").config;
const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();


app.use(express.json());
const dbUrl = "postgres:webadmin:MOAata75817@node57121-phakharaphon-noderest.proen.app.ruk-com.cloud:11826/Books";

const sequelize = new Sequelize(dbUrl);