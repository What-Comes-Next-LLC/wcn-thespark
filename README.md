# The Spark

*Transformation begins with The Spark.*

The Spark is the first mobile app in the Catalyst ecosystem — a minimalist, behavior-first tool designed to help users begin their health journey by doing one simple thing:  
**Capture moments of attention.**

No calorie counting. No shame. No fake AI assistant.  
Just a simple record — a Spark — created on your terms.

---

## 🚀 Project Overview

**The Spark** is the client capture layer for the What Comes Next? health platform.  
Its role is to make it easy, frictionless, and private for users to:

- Capture meal moments (photos, quick notes)
- Record habit reflections
- Submit lightweight daily logs

The Spark **does not process or analyze data on-device**.  
Instead, it **uploads clean, lightly structured data** for asynchronous batch processing (via Day in the Life).

This separation ensures:
- Fast, lightweight app experience
- Maximum privacy for users
- Scalable backend architecture

---

## ✨ Why It Matters

We are not trying to "predict behavior" in real time.  
We are trying to **mirror behavior** thoughtfully — on a rhythm that supports real coaching, not app addiction.

The Spark helps users build a **habit of reflection** without overwhelming them with live analytics, popups, or gamification.

---

## 🛠️ Core Principles

- **Guide, Don't Judge**: Light prompts to encourage clean inputs, no intrusive corrections.
- **Capture Now, Reflect Later**: Users focus on recording. System reflects patterns offline.
- **Privacy First**: Minimal device permissions. No external trackers. Local-first whenever possible.
- **Speed and Simplicity**: Fast offline usage with deferred synchronization.

---

## 📱 Technical Architecture

### Current (v0.1.0)
- **Capacitor-wrapped Android app** (WebView container for `/log` endpoint)
- **Secure token-based authentication**
- **Camera/file upload to server**
- **Personalized UI**
- **Branded, responsive interface**

### Upcoming Enhancements

| Version | Feature | Delta |
|:--------|:--------|:------|
| `v0.2` | Native camera integration | Replace web interface with native Android capture |
| `v0.3` | Offline drafts and upload queue | Allow capturing logs offline, submitting later |
| `v0.4` | Light on-device input validation | Basic pattern nudges (optional time prompts, tagging) |
| `v0.5` | Visual daily reflections (generated server-side) | Pull summaries from Day in the Life reports |

---

## 🌐 Interaction with the WCN Ecosystem

| Layer | Role |
|:------|:-----|
| **The Spark** | Guided client input (photos, notes) |
| **Day in the Life** | Offline batch processing of input blobs into structured PDFs |
| **Coach's Clipboard** | Trainer dashboard for weekly check-ins and habit reflection |

---

## 🧠 Development Status

### Currently Implemented
- ✅ Secure token-based authentication
- ✅ Photo/file upload capability
- ✅ Personalized welcome and success flows
- ✅ Responsive UI inside WebView
- ✅ Android packaging (Capacitor)

### In Development
- 🚧 Native camera API exploration
- 🚧 Offline queuing logic planning

---

## 🔒 Licensing

This project is licensed under the **Apache License 2.0**.  
See [`LICENSE`](./LICENSE) for full terms.

> Yes, it's open source. No, you can't patent it out from under us.  
> Free as in *principled* — not as in "steal this and pivot."

---

## 📢 Built and Maintained by What Comes Next?, LLC

Detroit-built. Trainer-powered. AI-enhanced.