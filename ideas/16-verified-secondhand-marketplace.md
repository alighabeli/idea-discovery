# سیستم خرید دست‌دوم با verification کامل کالا

## Problem
بازار کالاهای دست‌دوم در ایران (دیوار، اینستاگرام، گروه‌ها) با مشکلات جدی اعتماد مواجه است:
- عدم اطمینان از سلامت واقعی کالا
- اطلاعات ناقص یا جعلی از وضعیت محصول
- اختلاف پس از معامله
- نبود استاندارد برای ارزیابی کیفیت کالا

## Target Users
- خریداران کالاهای دست‌دوم
- فروشندگان شخصی
- تعمیرکاران و کارشناسان ارزیابی کالا

## Core Idea
یک مارکت‌پلیس دست‌دوم که به جای آگهی خام، روی «تایید وضعیت کالا» تمرکز دارد:
- هر کالا قبل از لیست شدن verify می‌شود
- وضعیت فنی و ظاهری استاندارد دارد
- گزارش کارشناسی یا crowd verification ارائه می‌شود

## Solution Overview
- ثبت کالا با چک‌لیست استاندارد وضعیت
- امکان verification توسط کارشناس یا کاربران معتبر
- نمایش grade کیفیت (A/B/C/D)
- اتصال به escrow برای کاهش ریسک

## Key Features
- پروفایل کالا با گزارش وضعیت
- سیستم درجه‌بندی کیفیت
- verification چندمنبعی
- تاریخچه استفاده/مالکیت (در صورت وجود)
- escrow پرداخت

## Value Proposition
- کاهش ریسک خرید دست‌دوم
- افزایش قیمت واقعی کالاهای سالم
- ایجاد اعتماد ساختاریافته در بازار C2C

## Differentiation (Iran Context)
- جایگزین مدل آگهی بدون بررسی
- تمرکز روی کیفیت واقعی نه توضیح فروشنده
- مناسب بازار high-fraud کالاهای دست‌دوم ایران

## MVP Scope
- ثبت کالا با فرم استاندارد
- grading ساده کیفیت
- تایید کارشناس دستی
- نمایش لیست verified items

## Future Extensions
- AI-based image inspection
- اتصال به O-004 (reputation layer)
- integration با repair marketplace (O-015)

## Risk / Constraints
- هزینه verification انسانی
- کند شدن فرآیند فروش
- scaling کارشناسان

## Category
C2C Marketplace / Verification System / Trust Infrastructure

---

## 🧠 MACHINE LAYER (DATA)

## Identity
id: O-016
title: سیستم خرید دست‌دوم با verification کامل کالا

status: discovered
decision: unknown

category: c2c_marketplace
idea_type: verified_goods_market

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
  - Back Market
  - eBay refurbished programs

iran_examples:
  - Divar unverified listings
  - Telegram second-hand groups

tags:
  - secondhand
  - verification
  - marketplace
  - trust

---

## 🧮 Computed Field (DO NOT STORE)
score = 24
max_score = 25