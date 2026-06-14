# Idea Discovery Schema v1.0

This file defines the structure for idea markdown files.

## File Location
ideas/*.md

## Frontmatter Fields
id, title, status, decision, category, idea_type, created, updated, discovered_from, market_size, pain_level, willingness_to_pay, competition_gap, founder_fit, foreign_examples, iran_examples, tags

## Status
- discovered
- researching
- validated
- discarded

## Decision
- unknown
- interesting
- high_potential
- not_interesting

## Idea Types
- marketplace
- saas
- network
- infrastructure
- media
- community
- other

## Scoring
score = market_size + pain_level + willingness_to_pay + competition_gap + founder_fit
max = 25