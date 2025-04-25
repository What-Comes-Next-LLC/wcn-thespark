# SECURITY.md

## Security Practices for What Comes Next LLC Projects

### 🔐 Core Principle: Privacy by Design
Security isn't an afterthought. It's a foundational requirement. All code, infrastructure, and engineering workflows must reflect this discipline.

---

## 🛡️ Secrets & Credential Handling

### ❌ Never Commit Secrets
- Do **not** hardcode credentials, tokens, or API keys in any source files.
- This applies to ALL keys, including:
  - Supabase anon/public keys
  - Stripe API tokens
  - OAuth secrets
  - Firebase configs

### ✅ Use Environment Variables
- All secrets must be loaded using environment variables (e.g. `process.env.*`).
- Use a local `.env` file for development and **never** commit this file.
- Add `.env` to `.gitignore` **before** creating the file.

### ✅ Share Using `.env.example`
- Add a redacted `.env.example` file to help teammates know what variables they need.
- Example:
  ```dotenv
  SUPABASE_URL=https://your-project.supabase.co
  SUPABASE_ANON_KEY=YOUR-ANON-KEY-HERE
  ```

---

## 🔍 Pre-Commit & Scan Hooks

We will soon enforce secrets scanning using tools like:
- [GitGuardian](https://www.gitguardian.com/)
- [Gitleaks](https://github.com/zricethezav/gitleaks)
- Custom pre-commit scripts (via [Husky](https://typicode.github.io/husky/))

These will scan staged code for any sensitive patterns.

---

## 🔁 Incident Response Protocol

If a secret is committed:
1. Immediately generate a new key in the dashboard (Supabase, Stripe, etc.)
2. Invalidate or delete the compromised key.
3. Rewrite Git history to remove secret using `git filter-repo` or `BFG`.
4. Communicate clearly to the team. Use incident log if needed.

---

## 📜 Ongoing Enforcement
- All repos must contain this `SECURITY.md`.
- Security reviews are mandatory before production deployment.
- Auth & bridge layer changes require written architectural review.

---

### Questions? Escalations?
Ping @Jason Rashaad or flag in `#engineering-sec` (when we have one).

> Because trust is earned in every line of code.