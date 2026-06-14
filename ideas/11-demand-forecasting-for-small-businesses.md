# سیستم پیش‌بینی تقاضا برای کسب‌وکارهای کوچک

## Problem
بیشتر کسب‌وکارهای کوچک در ایران (مغازه‌ها، فروشندگان آنلاین، عمده‌فروشان کوچک) هیچ دیدی نسبت به تقاضای آینده ندارند و تصمیم‌هایشان بر اساس تجربه یا حدس است:
- خرید بیش از حد → خواب سرمایه
- کمبود کالا → از دست دادن فروش
- نوسان شدید موجودی

## Target Users
- خرده‌فروشان
- فروشندگان اینستاگرامی
- عمده‌فروشان کوچک

## Core Idea
یک سیستم ساده پیش‌بینی تقاضا که:
- بر اساس داده‌های فروش گذشته و رفتار بازار
- الگوهای ساده تقاضا را استخراج کند
- پیشنهاد خرید/موجودی ارائه دهد

## Solution Overview
- ثبت فروش روزانه
- تحلیل الگوهای زمانی (هفتگی/ماهانه)
- پیشنهاد موجودی آینده
- هشدار کمبود یا مازاد کالا

## Key Features
- forecast ساده برای هر محصول
- نمودار تقاضای زمانی
- پیشنهاد خرید بهینه
- هشدار موجودی بحرانی

## Value Proposition
- کاهش خواب سرمایه
- افزایش فروش از دست نرفته
- بهینه‌سازی موجودی

## Differentiation (Iran Context)
- طراحی برای داده‌های ناقص و غیرساختاریافته
- بدون نیاز به ERP پیچیده
- کارکرد موبایل-فرست و ساده

## MVP Scope
- ثبت فروش روزانه
- نمایش trend ساده
- پیشنهاد موجودی
- هشدار کمبود

## Future Extensions
- AI forecasting مدل‌محور
- اتصال به سیستم قیمت‌گذاری (O-010)
- اتصال به تامین‌کننده‌ها (O-002 / O-008)

## Risk / Constraints
- کمبود داده تاریخی
- دقت پایین در فاز اولیه

## Category
Analytics / SME Intelligence / Demand Planning

---

## 🧠 MACHINE LAYER (DATA)

## Identity
id: O-011
title: سیستم پیش‌بینی تقاضا برای کسب‌وکارهای کوچک

status: discovered
decision: unknown

category: demand_forecasting
idea_type: analytics_tool

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
  - Shopify analytics
  - Amazon demand forecasting systems

iran_examples:
  - manual inventory estimation
  - intuition-based ordering in shops

tags:
  - forecasting
  - analytics
  - inventory
  - sme

---

## 🧮 Computed Field (DO NOT STORE)
score = 24
max_score = 25