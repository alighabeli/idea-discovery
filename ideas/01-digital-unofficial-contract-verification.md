# ثبت و اعتبارسنجی قراردادهای غیررسمی دیجیتال

## Problem
در ایران بخش بزرگی از تعاملات اقتصادی (به‌خصوص SMEها، فریلنسرها، پیمانکارها و معاملات شخصی) بر پایه قراردادهای شفاهی یا توافقات غیررسمی انجام می‌شود. این موضوع منجر به:
- اختلافات حقوقی بدون سند معتبر
- عدم امکان پیگیری حقوقی ساده
- هزینه بالای حل اختلاف
- کاهش اعتماد در معاملات B2B و B2C

## Target Users
- فریلنسرها و پیمانکاران
- کسب‌وکارهای کوچک (SME)
- فروشندگان اینستاگرامی و آنلاین
- افراد در معاملات شخصی (اجاره، خدمات، خرید و فروش)

## Core Idea
یک سیستم دیجیتال ساده برای ثبت، امضا و اعتبارسنجی قراردادهای غیررسمی که:
- بدون پیچیدگی حقوقی قابل استفاده باشد
- به عنوان «نسخه قابل استناد» از توافق عمل کند
- در صورت اختلاف، به عنوان evidence قابل استفاده باشد

## Solution Overview
- ایجاد قراردادهای ساده قالب‌محور (Template-based contracts)
- امضای دیجیتال سبک (OTP / consent log)
- ثبت timestamp و evidence trail
- ذخیره immutable record از توافق
- امکان export برای استفاده حقوقی

## Key Features
- قراردادهای آماده برای سناریوهای رایج (خدمات، اجاره، پروژه)
- ثبت توافق در کمتر از 2 دقیقه
- سیستم نسخه‌بندی قرارداد
- تایید دوطرفه با لاگ شفاف
- آرشیو قابل جستجو برای هر کاربر

## Value Proposition
- کاهش dispute در معاملات کوچک
- ایجاد حداقل سطح اعتماد رسمی بدون پیچیدگی حقوقی
- تبدیل تعاملات غیررسمی به data قابل استناد

## Differentiation (Iran Context)
- طراحی شده برای رفتار واقعی بازار ایران (قراردادهای شفاهی + chat-based)
- عدم وابستگی به امضای دیجیتال دولتی
- UX سبک mobile-first

## MVP Scope
- 5 template قرارداد اصلی
- ثبت توافق + OTP confirmation
- داشبورد قراردادهای کاربر
- export PDF

## Future Extensions
- dispute resolution layer
- escrow payments
- reputation layer

## Risk / Constraints
- عدم پذیرش حقوقی رسمی در فاز اول
- نیاز به UX بسیار ساده
- data integrity و tamper-proof logs

## Category
Trust Infrastructure / Legal-Tech Lightweight / SME Enablement

---

## 🧠 MACHINE LAYER (DATA)

## Identity
id: O-001
title: ثبت و اعتبارسنجی قراردادهای غیررسمی دیجیتال

status: discovered
decision: unknown

category: trust
idea_type: infrastructure

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
  - DocuSign
  - HelloSign
  - Ironclad

iran_examples:
  - informal contracts (WhatsApp / verbal agreements)
  - traditional notarized contracts (offline-only process)

tags:
  - legal-tech
  - trust
  - sme
  - contracts

---

## 🧮 Computed Field (DO NOT STORE)
score = 24
max_score = 25