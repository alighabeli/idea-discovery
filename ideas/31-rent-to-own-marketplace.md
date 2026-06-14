# Rent-to-Own برای کالاها

## Problem
در ایران خرید بسیاری از کالاهای سرمایه‌ای (لوازم خانگی، موبایل، تجهیزات کاری) برای بخش بزرگی از کاربران دشوار است:
- نقدینگی اولیه کافی وجود ندارد
- وام بانکی در دسترس یا سریع نیست
- بازار اجاره و خرید جدا و ناکارآمد است

نتیجه:
- تعویق در دسترسی به کالاهای ضروری
- کاهش بهره‌وری خانوار و کسب‌وکار
- خریدهای غیررسمی با ریسک بالا

## Target Users
- خانوارهای کم‌درآمد یا متوسط
- کارگران و فریلنسرها
- کسب‌وکارهای کوچک
- فروشندگان کالا

## Core Idea
یک مدل Rent-to-Own که در آن کاربر:
- کالا را ابتدا اجاره می‌کند
- بخشی از پرداخت‌ها به مالکیت نهایی تبدیل می‌شود
- در صورت توقف پرداخت، کالا قابل بازگشت است

## Solution Overview
- قرارداد اجاره + مالکیت مرحله‌ای
- پرداخت اقساطی انعطاف‌پذیر
- tracking مالکیت تدریجی
- مدیریت ریسک بازپس‌گیری کالا

## Key Features
- قرارداد rent-to-own استاندارد
- پرداخت ماهانه/هفتگی
- انتقال تدریجی ownership
- سیستم بازپس‌گیری (repossess)
- امتیازدهی اعتباری کاربر

## Value Proposition
- دسترسی سریع‌تر به کالا
- کاهش فشار مالی اولیه
- افزایش فروش برای فروشندگان

## Differentiation (Iran Context)
- جایگزین وام رسمی برای کالاهای خرد
- مناسب اقتصاد نقدینگی محدود
- ترکیب credit + rental + ownership

## MVP Scope
- ثبت کالا
- قرارداد ساده rent-to-own
- پرداخت مرحله‌ای
- ثبت وضعیت مالکیت

## Future Extensions
- اتصال به O-017 (BNPL)
- اتصال به O-021 (invoice liquidation)
- risk scoring برای default

## Risk / Constraints
- ریسک نکول
- پیچیدگی حقوقی مالکیت
- مدیریت repossession

## Category
Fintech / Asset Financing / Consumer Credit

---

## 🧠 MACHINE LAYER (DATA)

## Identity
id: O-031
title: Rent-to-Own برای کالاها

status: discovered
decision: unknown

category: consumer_finance
idea_type: rent_to_own

discovered_from: iran_market_gap

created: 2026-06-14
updated: 2026-06-14

---

## 📊 Scoring Inputs (1-5)
market_size: 5
pain_level: 5
willingness_to_pay: 4
competition_gap: 4
founder_fit: 5

---

## 🌍 References
foreign_examples:
  - Rent-A-Center
  - Klarna financing models

iran_examples:
  - informal installment sales in stores
  - rental shops with informal purchase options

tags:
  - rent
  - ownership
  - bnpl
  - financing

---

## 🧮 Computed Field (DO NOT STORE)
score = 23
max_score = 25