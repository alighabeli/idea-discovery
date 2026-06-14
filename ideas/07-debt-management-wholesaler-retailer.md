# سیستم مدیریت بدهی بین عمده‌فروش و خرده‌فروش

## Problem
در اکوسیستم توزیع سنتی ایران، بخش بزرگی از معاملات به‌صورت نسیه و اعتباری انجام می‌شود. اما مدیریت این بدهی‌ها معمولاً:
- در دفترچه یا حافظه افراد است
- شفافیت ندارد
- باعث اختلافات مالی و بی‌اعتمادی می‌شود

نتیجه:
- دیرپرداختی‌های کنترل‌نشده
- از بین رفتن اعتبار بین طرفین
- کاهش گردش نقدینگی

## Target Users
- عمده‌فروشان
- خرده‌فروشان (مغازه‌ها)
- پخش‌کنندگان

## Core Idea
یک سیستم ساده برای ثبت، پیگیری و مدیریت بدهی‌های بین کسب‌وکارها که:
- هر معامله نسیه را ثبت کند
- وضعیت بدهی را لحظه‌ای نمایش دهد
- تاریخ تسویه را شفاف کند

## Solution Overview
- ثبت بدهی در لحظه خرید
- اتصال بدهی به تامین‌کننده و خریدار
- نمایش مانده حساب هر طرف
- یادآوری سررسید پرداخت

## Key Features
- دفتر بدهی دیجیتال
- وضعیت پرداخت (pending / partial / paid)
- تاریخچه تسویه حساب
- هشدار سررسید
- گزارش بدهی کل هر مشتری

## Value Proposition
- کاهش اختلافات مالی
- افزایش شفافیت جریان اعتباری
- بهبود مدیریت نقدینگی کسب‌وکارها

## Differentiation (Iran Context)
- طراحی شده برای بازار نسیه محور ایران
- جایگزین دفترهای دستی بدهی
- UX بسیار ساده و سریع

## MVP Scope
- ثبت بدهی
- ثبت پرداخت
- لیست بدهکاران
- وضعیت تسویه

## Future Extensions
- اتصال به سیستم اعتبارسنجی
- credit scoring خودکار
- اتصال به فاکتورینگ

## Risk / Constraints
- مقاومت کاربران سنتی
- خطای انسانی در ثبت داده

## Category
B2B Finance / Trade Credit / SME Tools

---

## 🧠 MACHINE LAYER (DATA)

## Identity
id: O-007
title: سیستم مدیریت بدهی بین عمده‌فروش و خرده‌فروش

status: discovered
decision: unknown

category: trade_credit
idea_type: debt_tracking

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
  - Trade credit ledger systems
  - ERP credit modules

iran_examples:
  - traditional notebook-based debt tracking
  - wholesale nesiye transactions

tags:
  - debt
  - b2b
  - credit
  - wholesale

---

## 🧮 Computed Field (DO NOT STORE)
score = 24
max_score = 25