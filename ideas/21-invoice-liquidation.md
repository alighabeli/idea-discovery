# سیستم تبدیل طلب به نقد (Invoice Liquidation)

## Problem
در بازار B2B ایران، بسیاری از طلب‌ها و فاکتورهای نسیه عملاً "قفل نقدینگی" ایجاد می‌کنند:
- پرداخت‌ها با تأخیرهای طولانی انجام می‌شوند
- فروشنده‌ها سرمایه در گردش ندارند
- امکان نقد کردن سریع طلب‌ها وجود ندارد

نتیجه:
- توقف رشد کسب‌وکارهای کوچک
- وابستگی به وام‌های غیررسمی
- افزایش ریسک عملیاتی

## Target Users
- عمده‌فروشان
- تولیدکنندگان کوچک
- پخش‌کنندگان
- کسب‌وکارهای B2B با فروش نسیه

## Core Idea
یک سیستم سبک برای تبدیل مستقیم طلب‌های ثبت‌شده به نقدینگی:
- فروش یا واگذاری طلب به سرمایه‌گذار
- تسویه فوری با تخفیف ریسک
- مدیریت lifecycle بدهی

## Solution Overview
- ثبت طلب (invoice / credit sale)
- ارزیابی ریسک ساده
- بازار خرید طلب‌ها (liquidity pool)
- تسویه فوری با discount

## Key Features
- invoice registry
- secondary market for receivables
- discount/risk pricing
- settlement engine
- tracking پرداخت بدهکار

## Value Proposition
- آزادسازی نقدینگی سریع
- کاهش فشار مالی SMEها
- ایجاد بازار ثانویه واقعی برای بدهی‌ها

## Differentiation (Iran Context)
- طراحی برای اقتصاد غیررسمی
- بدون نیاز به بانک یا اعتبارسنجی رسمی
- قابل اتصال به سیستم‌های اعتماد (O-004, O-005, O-020)

## MVP Scope
- ثبت طلب ساده
- نمایش وضعیت پرداخت
- فروش دستی طلب
- تسویه فوری

## Future Extensions
- auto-pricing بر اساس risk score
- integration با factoring (O-020)
- AI-based default prediction

## Risk / Constraints
- high default risk
- نیاز به liquidity اولیه
- پیچیدگی اعتماد بین طرفین

## Category
Fintech / Liquidity / SME Credit Infrastructure

---

## 🧠 MACHINE LAYER (DATA)

## Identity
id: O-021
title: سیستم تبدیل طلب به نقد (Invoice Liquidation)

status: discovered
decision: unknown

category: liquidity_infrastructure
idea_type: receivable_marketplace

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
  - market for receivables (factoring systems)
  - supply chain finance platforms

iran_examples:
  - informal selling of debts between traders
  - cashflow pressure in wholesale markets

tags:
  - liquidity
  - invoice
  - credit
  - sme

---

## 🧮 Computed Field (DO NOT STORE)
score = 24
max_score = 25