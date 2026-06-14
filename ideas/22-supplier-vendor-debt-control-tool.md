# ابزار کنترل بدهی بین تامین‌کننده و فروشنده

## Problem
در روابط بین تامین‌کننده‌ها و فروشنده‌ها در بازار ایران، بدهی‌ها و تسویه‌ها به‌صورت غیرساختاریافته مدیریت می‌شوند:
- عدم شفافیت در مانده حساب‌ها
- اختلاف در زمان و مبلغ تسویه
- نبود دید مشترک از وضعیت بدهی

نتیجه:
- اصطکاک مالی بین طرفین
- کاهش اعتماد
- اختلال در جریان تامین کالا

## Target Users
- تامین‌کنندگان عمده
- فروشندگان خرده و عمده
- پخش‌کنندگان

## Core Idea
یک ابزار مشترک برای مدیریت بدهی دوطرفه که:
- هر تراکنش بدهی را همزمان برای دو طرف ثبت می‌کند
- یک ledger مشترک ایجاد می‌کند
- وضعیت تسویه را لحظه‌ای شفاف می‌کند

## Solution Overview
- دفتر بدهی مشترک بین supplier و vendor
- ثبت خریدهای اعتباری
- ثبت پرداخت‌ها
- reconciliation خودکار یا نیمه‌خودکار

## Key Features
- shared debt ledger
- real-time balance sync
- transaction reconciliation
- payment tracking
- dispute flagging ساده

## Value Proposition
- کاهش اختلافات مالی
- افزایش شفافیت در زنجیره تامین
- بهبود جریان نقدینگی

## Differentiation (Iran Context)
- طراحی برای روابط غیررسمی و نیمه‌اعتماد
- جایگزین دفترهای دستی و واتساپی
- سبک و موبایل‌محور

## MVP Scope
- ثبت تراکنش دوطرفه
- نمایش balance مشترک
- ثبت پرداخت
- history ساده

## Future Extensions
- اتصال به O-007 (debt system)
- اتصال به O-019 (cashflow)
- integration با O-020 (factoring)

## Risk / Constraints
- اختلاف در ثبت داده
- نیاز به پذیرش دوطرفه
- مسئله sync و اعتماد

## Category
B2B Finance / Trade Operations / Debt Infrastructure

---

## 🧠 MACHINE LAYER (DATA)

## Identity
id: O-022
title: ابزار کنترل بدهی بین تامین‌کننده و فروشنده

status: discovered
decision: unknown

category: trade_operations
idea_type: shared_ledger

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
  - ERP shared ledgers
  - supplier-vendor accounting systems

iran_examples:
  - WhatsApp-based debt tracking
  - notebook-based reconciliation between traders

tags:
  - debt
  - supplier
  - ledger
  - b2b

---

## 🧮 Computed Field (DO NOT STORE)
score = 24
max_score = 25