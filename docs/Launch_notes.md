# The Spark Mobile App Launch Notes

## Project Overview
The Spark is a mobile-first, offline-capable wrapper for health tracking and food logging, anchored by secure Supabase authentication. This document chronicles implementation details and architectural decisions during development.

---

## Critical Lessons Learned (2025-04-25)

### Engineering Conduct and Development Discipline

During initial development phases, multiple teams unintentionally introduced instability into core systems through decisions including:
- Frequent unauthorized architectural pivots
- Ignoring agreed environment variable usage
- Hardcoding credentials and connection strings
- Losing module structure discipline
- Reintroducing CORS risks after they were explicitly designed out

### Moving Forward – Engineering Ground Rules

To maintain system integrity:
- **No hardcoding of project credentials.** All dynamic data must load from environment-controlled modules.
- **Respect modular structure.** All authentication, configuration, and bridge code must remain cleanly separated.
- **No stealth architecture changes.** Any proposed change to authentication, session management, or WebView behavior must be documented and reviewed first.
- **Preserve testability and traceability.** Every authentication event must be confirmable at the database level (Auth table verification mandatory).

Mistakes were made. That’s acceptable. **Not learning from them is not.**

The next technical leadership layer expects disciplined, respectful engineering practices from day one.  
Not because it’s “corporate”—because it is **necessary**.

We build for trust, durability, and clarity.

---

(Additional technical notes unchanged from previous sections.)
