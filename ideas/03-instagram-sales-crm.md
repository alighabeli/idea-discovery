# CRM مخصوص فروش اینستاگرامی (نه عمومی)

## Problem
بخش بزرگی از فروش آنلاین در ایران روی اینستاگرام انجام می‌شود، اما هیچ CRM واقعی برای این مدل وجود ندارد. فروشندگان مجبورند:
- سفارش‌ها را در دایرکت و واتساپ مدیریت کنند
- پیگیری مشتریان را دستی انجام دهند
- موجودی و پرداخت‌ها را در ابزارهای پراکنده نگه دارند

نتیجه:
- از دست رفتن سفارش‌ها
- عدم پیگیری مشتریان تکراری
- ناتوانی در تحلیل فروش

## Target Users
- پیج‌های فروش اینستاگرامی
- فروشندگان خانگی و کوچک
- آنلاین‌شاپ‌های بدون سایت

## Core Idea
یک CRM سبک و اختصاصی برای اینستاگرام که:
- دایرکت‌ها را به سفارش تبدیل کند
- مشتری‌ها را پروفایل‌سازی کند
- فرآیند فروش را از چت به pipeline تبدیل کند

## Solution Overview
- اتصال به اینستاگرام دایرکت (یا شبیه‌سازی workflow)
- تبدیل پیام‌ها به سفارش (Order Pipeline)
- مدیریت مشتریان (Customer Profiles)
- ثبت وضعیت سفارش (pending / paid / shipped)

## Key Features
- Inbox unified برای دایرکت‌ها
- ساخت خودکار پروفایل مشتری
- ثبت سفارش از داخل چت
- یادآور پیگیری مشتری
- گزارش فروش ساده روزانه

## Value Proposition
- جلوگیری از گم شدن سفارش‌ها
- افزایش نرخ تبدیل مشتری
- حرفه‌ای شدن فروش اینستاگرامی بدون نیاز به سایت

## Differentiation (Iran Context)
- طراحی شده برای Instagram-first businesses
- بدون نیاز به سایت یا ایمیل
- UX کاملاً چتی و سبک

## MVP Scope
- inbox ساده
- customer list
- order status tracking
- manual tagging system

## Future Extensions
- AI auto-reply
- sentiment tagging مشتری
- پیشنهاد قیمت و upsell
- اتصال به پرداخت و ارسال

## Risk / Constraints
- محدودیت API اینستاگرام
- نیاز به workaround برای data capture

## Category
SME Tools / Social Commerce / Instagram Economy

---

## 🧠 MACHINE LAYER (DATA)

## Identity
id: O-003
title: CRM مخصوص فروش اینستاگرامی

status: discovered
decision: unknown

category: social_commerce
idea_type: CRM_light

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
  - Shopify Inbox
  - HubSpot CRM

iran_examples:
  - فروش مستقیم از دایرکت اینستاگرام
  - مدیریت سفارش در واتساپ و اکسل

tags:
  - instagram
  - crm
  - social-commerce
  - sme

---

## 🧮 Computed Field (DO NOT STORE)
score = 24
max_score = 25