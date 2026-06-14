# پلتفرم خرید گروهی محله‌ای (Bulk Buying واقعی)

## Problem
در ایران خرید کالا به‌صورت خرد باعث می‌شود:
- قیمت نهایی بالاتر باشد
- قدرت چانه‌زنی پایین باشد
- واسطه‌ها سهم بیشتری بگیرند

در مقابل، خرید عمده ارزان‌تر است اما:
- دسترسی برای افراد عادی سخت است
- حداقل سفارش (MOQ) مانع ورود می‌شود

## Target Users
- خانوارها
- کسب‌وکارهای کوچک
- ساکنین یک محله یا منطقه
- گروه‌های غیررسمی خرید

## Core Idea
یک پلتفرم که خریدهای خرد را به خرید عمده تبدیل می‌کند:
- کاربران یک محصول را پیشنهاد می‌دهند
- تقاضا تجمیع می‌شود
- سفارش به صورت bulk از تامین‌کننده انجام می‌شود

## Solution Overview
- ایجاد گروه خرید برای هر کالا
- تجمیع تقاضا در سطح محله/شهر
- اتصال به عمده‌فروش‌ها
- اجرای سفارش جمعی

## Key Features
- group buying campaigns
- aggregation of demand
- price reduction based on volume
- supplier matching
- delivery coordination

## Value Proposition
- کاهش قیمت خرید برای مصرف‌کننده
- افزایش فروش برای تامین‌کننده
- کاهش واسطه‌ها

## Differentiation (Iran Context)
- مناسب فرهنگ خرید گروهی غیررسمی
- قابل اجرا در سطح محله و شبکه‌های اجتماعی
- بدون نیاز به قراردادهای پیچیده

## MVP Scope
- ایجاد کمپین خرید
- ثبت مشارکت کاربران
- سفارش به تامین‌کننده
- مدیریت ساده تحویل

## Future Extensions
- اتصال به O-008 (wholesale marketplace)
- dynamic pricing based on demand
- integration with logistics partners

## Risk / Constraints
- هماهنگی تحویل
- ریسک عدم رسیدن به MOQ
- پیچیدگی عملیاتی

## Category
Marketplace / Group Commerce / Supply Chain

---

## 🧠 MACHINE LAYER (DATA)

## Identity
id: O-023
title: پلتفرم خرید گروهی محله‌ای

status: discovered
decision: unknown

category: group_commerce
idea_type: bulk_buying

discovered_from: iran_market_gap

created: 2026-06-14
updated: 2026-06-14

---

## 📊 Scoring Inputs (1-5)
market_size: 5
pain_level: 4
willingness_to_pay: 4
competition_gap: 4
founder_fit: 5

---

## 🌍 References
foreign_examples:
  - Groupon
  - Pinduoduo

iran_examples:
  - Telegram group buys
  - neighborhood bulk purchasing behavior

tags:
  - group-buying
  - marketplace
  - wholesale
  - retail

---

## 🧮 Computed Field (DO NOT STORE)
score = 22
max_score = 25