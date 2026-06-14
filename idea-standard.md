# Idea Document Standard v1.0

This file defines the unified standard for all idea entries in this repository.

It combines:
- Machine-readable schema (for parsing, scoring, dashboards)
- Human-readable explanation (for understanding and decision making)

---

# =========================
# 🧠 MACHINE LAYER (DATA)
# =========================

## Identity
id: O-001
title: Commercial Trust Network

status: discovered
decision: unknown

category: trust
idea_type: network

discovered_from: global_startup

created: 2026-06-14
updated: 2026-06-14

---

## 📊 Scoring Inputs (1-5)
market_size: 5
pain_level: 5
willingness_to_pay: 5
competition_gap: 5
founder_fit: 5

---

## 🌍 References
foreign_examples:
  - Trustpilot
  - Dun & Bradstreet
  - Creditsafe

iran_examples:
  - none

tags:
  - b2b
  - trust
  - reputation

---

## 🧮 Computed Field (DO NOT STORE)
score = market_size + pain_level + willingness_to_pay + competition_gap + founder_fit
max_score = 25

---

# =========================
# 🧠 HUMAN LAYER (EXPLANATION)
# =========================

## 💡 One-Liner
A trust and reputation layer for Iranian B2B commerce.

---

## 🎯 Problem
Businesses in Iran struggle to evaluate the trustworthiness of partners, suppliers, and buyers. Decisions rely heavily on informal networks.

---

## 👥 Customer
- SMEs
- Importers
- Distributors
- B2B traders

---

## 🔄 Current Behavior
- Personal referrals
- WhatsApp groups
- Existing relationships
- Manual background checks

---

## 🧩 Solution
A structured trust infrastructure providing:
- Company profiles
- Trade history signals
- Reputation scoring
- Verification layers

---

## 🌍 Why It Might Work
- Trust is a major bottleneck in commerce
- No structured digital trust layer exists
- Global analogs validate the concept
- Increasing digitization of trade

---

## ⚠️ Why It Might Fail
- Strong network effects required
- Hard bootstrapping of data
- Trust manipulation risk
- Slow adoption in traditional markets

---

## 📊 Signals
- High reliance on informal trust
- Frequent fraud in B2B transactions
- Demand for verification services
- Success of global trust platforms

---

## 🧠 Notes
Free-form insights, hypotheses, and research notes.