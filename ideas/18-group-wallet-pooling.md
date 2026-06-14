# کیف پول گروهی (Family + Business Pooling)

## Problem
در بسیاری از تعاملات مالی روزمره در ایران، نیاز به مدیریت پول به‌صورت گروهی وجود دارد:
- خانواده‌ها برای هزینه‌های مشترک
- گروه‌های دوستانه برای سفر یا خرید
- کسب‌وکارهای کوچک برای هزینه‌های عملیاتی مشترک

اما ابزارهای موجود:
- یا بانکی و پیچیده هستند
- یا برای use-caseهای گروهی طراحی نشده‌اند

## Target Users
- خانواده‌ها
- گروه‌های کوچک دوستانه
- SMEهای کوچک
- تیم‌های پروژه‌ای غیررسمی

## Core Idea
یک کیف پول گروهی ساده که:
- چند نفر بتوانند به یک pool مالی مشترک پول واریز کنند
- هزینه‌ها از یک صندوق مشترک مدیریت شود
- شفافیت کامل تراکنش‌ها بین اعضا وجود داشته باشد

## Solution Overview
- ایجاد گروه مالی (wallet pool)
- واریز و برداشت اعضا
- ثبت شفاف تراکنش‌ها
- تقسیم خودکار هزینه‌ها

## Key Features
- wallet group creation
- contribution tracking
- expense splitting
- transaction transparency
- role-based permissions (admin/member)

## Value Proposition
- حذف درگیری‌های مالی گروهی
- شفاف‌سازی هزینه‌های مشترک
- ساده‌سازی مدیریت پول در گروه‌ها

## Differentiation (Iran Context)
- طراحی برای روابط غیررسمی (خانواده/دوستان)
- بدون نیاز به حساب بانکی مشترک رسمی
- UX بسیار ساده و موبایل-محور

## MVP Scope
- ساخت گروه
- واریز/برداشت ساده
- نمایش لیست تراکنش‌ها
- تقسیم هزینه دستی

## Future Extensions
- اتصال به BNPL (O-017)
- smart splitting rules
- integration with payment gateways

## Risk / Constraints
- مسائل حقوقی نگهداری پول
- اعتماد بین اعضای گروه
- نیاز به شفافیت کامل ledger

## Category
Fintech / Shared Finance / Wallet Infrastructure

---

## 🧠 MACHINE LAYER (DATA)

## Identity
id: O-018
title: کیف پول گروهی (Family + Business Pooling)

status: discovered
decision: unknown

category: fintech
idea_type: group_wallet

discovered_from: iran_market_gap

created: 2026-06-14
updated: 2026-06-14

---

## 📊 Scoring Inputs (1-5)
market_size: 5
pain_level: 4
willingness_to_pay: 3
competition_gap: 5
founder_fit: 5

---

## 🌍 References
foreign_examples:
  - Splitwise
  - Revolut shared accounts

iran_examples:
  - informal group payments via card transfers
  - shared travel cost pooling manually

tags:
  - wallet
  - group
  - fintech
  - payments

---

## 🧮 Computed Field (DO NOT STORE)
score = 22
max_score = 25