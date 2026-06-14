# پلتفرم اجاره امن (با ضمانت و بیمه)

## Problem
بازار اجاره در ایران (خانه، تجهیزات، کالا) با ریسک بالای اعتماد همراه است:
- خسارت به دارایی اجاره‌دهنده
- عدم بازگشت کالا
- اختلاف بر سر وضعیت اولیه/نهایی
- نبود ضمانت اجرایی واقعی

## Target Users
- اجاره‌دهندگان ملک
- اجاره‌دهندگان تجهیزات (دوربین، ابزار، خودرو)
- کاربران اجاره‌کننده کوتاه‌مدت

## Core Idea
یک پلتفرم اجاره که ریسک را از طریق ساختارهای مالی و اعتباری کاهش می‌دهد:
- escrow مالی برای تضمین معامله
- بیمه خسارت برای دارایی
- ثبت وضعیت دارایی قبل و بعد از اجاره

## Solution Overview
- ثبت دارایی قابل اجاره با وضعیت اولیه
- ودیعه (deposit) و escrow پرداخت
- بیمه خسارت در سطح معامله
- ثبت تحویل/عودت با تایید دوطرفه

## Key Features
- پروفایل دارایی اجاره‌ای
- سیستم ودیعه و آزادسازی مرحله‌ای
- ثبت وضعیت (check-in / check-out)
- گزارش خسارت
- رتبه‌بندی اجاره‌کننده و اجاره‌دهنده

## Value Proposition
- کاهش ریسک اجاره
- افزایش نرخ استفاده از دارایی‌ها
- ایجاد اعتماد در معاملات کوتاه‌مدت

## Differentiation (Iran Context)
- طراحی برای بازار بدون بیمه قوی اجاره
- ترکیب escrow + trust + reputation
- مناسب اجاره‌های غیررسمی (نه فقط املاک رسمی)

## MVP Scope
- ثبت دارایی
- سیستم ودیعه ساده
- تایید تحویل و بازگشت
- پروفایل کاربران

## Future Extensions
- بیمه شخص ثالث
- dispute resolution system
- اتصال به O-004 (reputation layer)

## Risk / Constraints
- پیچیدگی حقوقی بیمه و escrow
- نیاز به اعتماد اولیه بازار

## Category
Rental Economy / Trust Infrastructure / Fintech-lite

---

## 🧠 MACHINE LAYER (DATA)

## Identity
id: O-013
title: پلتفرم اجاره امن با ضمانت و بیمه

status: discovered
decision: unknown

category: rental_economy
idea_type: escrow_insurance_platform

discovered_from: iran_market_gap

created: 2026-06-14
updated: 2026-06-14

---

## 📊 Scoring Inputs (1-5)
market_size: 5
pain_level: 5
willingness_to_pay: 4
competition_gap: 5
founder_fit: 5

---

## 🌍 References
foreign_examples:
  - Airbnb (trust + insurance model)
  - Fat Llama (equipment rental)

iran_examples:
  - informal rental of tools and property
  - high-risk peer-to-peer lending/borrowing of goods

tags:
  - rental
  - escrow
  - insurance
  - trust

---

## 🧮 Computed Field (DO NOT STORE)
score = 24
max_score = 25