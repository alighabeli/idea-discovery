# مارکت‌پلیس واقعی تعمیرات با ضمانت نتیجه

## Problem
بازار خدمات تعمیرات در ایران (لوازم خانگی، موبایل، خودرو، تاسیسات) به‌شدت غیرشفاف و وابسته به تجربه فردی است:
- کیفیت خدمات قابل پیش‌بینی نیست
- قیمت‌گذاری استاندارد وجود ندارد
- ضمانت واقعی برای نتیجه کار کم است
- اختلافات پس از تعمیر رایج است

## Target Users
- کاربران خدمات تعمیرات خانگی
- تعمیرکاران مستقل
- تعمیرگاه‌های کوچک
- پلتفرم‌های خدماتی محلی

## Core Idea
یک مارکت‌پلیس تعمیرات که تمرکز آن از «پیدا کردن تعمیرکار» به «تضمین نتیجه تعمیر» تغییر می‌کند:
- هر سفارش تعمیر با ضمانت نتیجه ثبت می‌شود
- پرداخت مشروط به تأیید نتیجه
- سیستم امتیازدهی واقعی بر اساس outcome

## Solution Overview
- ثبت درخواست تعمیر با جزئیات مشکل
- پیشنهاد تعمیرکاران با score و تخصص
- escrow پرداخت تا تأیید نتیجه
- ثبت outcome (تعمیر موفق / ناموفق / نیاز به اصلاح)

## Key Features
- پروفایل تعمیرکار + تخصص‌ها
- سیستم قیمت‌گذاری پیشنهادی
- escrow برای خدمات
- ثبت نتیجه کار
- امتیازدهی outcome-based

## Value Proposition
- کاهش ریسک استفاده از خدمات تعمیرات
- افزایش کیفیت خدمات در بازار رقابتی
- ایجاد استاندارد جدید برای خدمات محلی

## Differentiation (Iran Context)
- مناسب بازار غیررسمی تعمیرات ایران
- تمرکز روی نتیجه (outcome) نه فقط انجام کار
- ترکیب trust + escrow + reputation

## MVP Scope
- ثبت درخواست تعمیر
- انتخاب تعمیرکار
- پرداخت مشروط
- ثبت نتیجه

## Future Extensions
- اتصال به O-013 (escrow rental)
- AI diagnosis اولیه مشکل
- سیستم ضمانت چندمرحله‌ای

## Risk / Constraints
- اختلاف در تعریف "تعمیر موفق"
- نیاز به استانداردسازی outcome
- سوءاستفاده از سیستم ضمانت

## Category
Service Marketplace / Trust Infrastructure / Repair Economy

---

## 🧠 MACHINE LAYER (DATA)

## Identity
id: O-015
title: مارکت‌پلیس واقعی تعمیرات با ضمانت نتیجه

status: discovered
decision: unknown

category: service_marketplace
idea_type: outcome_based_marketplace

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
  - TaskRabbit
  - Angi Services

iran_examples:
  - local repair shops without standardized guarantees
  - informal technician hiring via Telegram/WhatsApp

tags:
  - repair
  - marketplace
  - escrow
  - services

---

## 🧮 Computed Field (DO NOT STORE)
score = 24
max_score = 25