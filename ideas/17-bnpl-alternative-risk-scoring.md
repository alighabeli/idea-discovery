# BNPL داخلی بدون بانک (Alternative Risk Scoring)

## Problem
در ایران، دسترسی به اعتبار مصرف‌کننده (Buy Now Pay Later) محدود، بانکی و سخت‌گیرانه است. نتیجه:
- بسیاری از خریداران فاقد اعتبار رسمی هستند
- فروشندگان کوچک نمی‌توانند فروش اقساطی امن ارائه دهند
- ریسک نکول بالا و غیرقابل اندازه‌گیری است

## Target Users
- فروشگاه‌های آنلاین و حضوری
- خریداران خرد
- کسب‌وکارهای SME

## Core Idea
یک سیستم BNPL غیر بانکی که بر اساس داده‌های رفتاری و شبکه‌ای کار می‌کند:
- اعتباردهی بر اساس رفتار واقعی کاربر
- بدون نیاز به بانک یا سیستم سنتی credit bureau
- اتصال به اکوسیستم تراکنش‌های خرد

## Solution Overview
- ساخت score اعتباری رفتاری
- تعیین سقف اعتبار پویا
- پرداخت مرحله‌ای به فروشنده
- جمع‌آوری داده بازپرداخت برای بهبود مدل

## Key Features
- risk scoring غیر بانکی
- credit limit پویا
- پرداخت split / installment
- monitoring بازپرداخت
- integration با marketplace و CRM

## Value Proposition
- افزایش قدرت خرید کاربران
- افزایش فروش برای کسب‌وکارها
- ایجاد لایه اعتباری جدید در اقتصاد غیررسمی

## Differentiation (Iran Context)
- بدون وابستگی به بانک یا چک و ضامن
- مبتنی بر reputation + transaction graph
- مناسب اکوسیستم fragmented ایران

## MVP Scope
- تعریف credit score ساده
- پرداخت اقساطی manual
- ثبت بازپرداخت
- تعیین limit اولیه

## Future Extensions
- اتصال به O-004 (portable reputation)
- AI risk scoring
- fraud detection layer

## Risk / Constraints
- ریسک نکول بالا
- نیاز به داده کافی برای scoring
- abuse از سیستم اعتبار

## Category
Fintech / Credit Infrastructure / BNPL Alternative

---

## 🧠 MACHINE LAYER (DATA)

## Identity
id: O-017
title: BNPL داخلی بدون بانک

status: discovered
decision: unknown

category: fintech
idea_type: alternative_bnpl

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
  - Klarna
  - Afterpay

iran_examples:
  - informal installment sales in shops
  - credit based on trust rather than system

tags:
  - bnpl
  - credit
  - fintech
  - risk

---

## 🧮 Computed Field (DO NOT STORE)
score = 24
max_score = 25