# The Spark

*Transformation begins with The Spark.*

The Spark is the first mobile app in the Catalyst ecosystem — a minimalist, behavior-first tool designed to help users begin their health journey by doing one simple thing:  
**Take a picture of your food.**

No calorie counting. No shame. No fake AI assistant.  
Just one moment of intention — a Spark — captured.

## Current Status
The Spark's core functionality is already live within The Catalyst platform at `/log`:
- Secure token-based authentication
- Personalized user welcome
- Photo/file upload capability
- Motivational messaging
- Branded, responsive interface
- User data association
- Success/return flow

This repository represents the next step: packaging this proven functionality into a dedicated mobile experience.

---

## 💡 Project Vision

**The Spark** is more than a meal logger. It is the entry point to a privacy-first, trainer-guided, AI-enhanced health platform.

We believe that sustainable change starts not with knowledge, but with *attention.*  
By capturing meals in real time, we begin building a **longitudinal, visual record** of human behavior — personalized, private, and powerful.

As the platform evolves, these logs will feed a secure, user-specific system capable of:

- Identifying patterns in meal timing, content, and context  
- Suggesting personalized pantry builds from recurring ingredients  
- Generating "Day in the Life" mosaics and reflections  
- Supporting trainers with contextualized coaching dashboards  
- Creating progress narratives unique to each user's journey  

All of this will happen without sharing or selling user data.  
The Catalyst system is a **locally-hosted, privacy-centered alternative** to traditional cloud-based health trackers.

---

## 🔥 What This Repo Is

This is the **Capacitor-wrapped Android application** that delivers The Spark.
It is a lightweight WebView container pointing to our existing, proven `/log` endpoint.

### Version: `v0.1.0` — _Mobile Access to The Spark_

**Current Web Functionality (The Catalyst `/log`):**
- Token-based secure authentication
- Personalized user interface
- Photo/file upload with web camera access
- User data association
- Success confirmation and return flow
- Responsive, branded design

**Mobile Wrapper Goals (This Repository):**
- Full-screen WebView container
- Native app packaging
- Android permissions handling
- Play Store deployment
- Basic error handling

---

## 📱 Development Status & Roadmap

### Currently Implemented (The Catalyst `/log`)
- ✅ Secure token-based authentication
- ✅ Photo/file uploads via web interface
- ✅ User data association and storage
- ✅ Personalized welcome messages
- ✅ Branded, responsive UI
- ✅ Success/return flow

### v0.1.0 — Mobile Wrapper
- Native Android container
- WebView implementation
- Required permissions handling
- Play Store deployment package
- Basic error handling

### Future Phases

| Version | Feature | Delta from Current |
|---------|---------|-------------------|
| `v0.2` | Native camera integration | Replace web camera interface with native Android camera |
| `v0.3` | Offline queuing | Add local storage and upload queue |
| `v0.4` | Local AI suggestions | New feature - requires local model integration |
| `v0.5` | Visual summaries | New feature - requires image processing pipeline |
| `v1.0` | On-device insights | New feature - requires local RAG implementation |

Each future phase builds upon our existing secure, privacy-focused foundation while adding native capabilities beyond the current web implementation.

---

## 🔒 Philosophy

> "We don't coach with fear. We coach with patterns.  
> We don't predict your behavior. We help you reflect on it."

The Spark is about giving users control — over their data, their habits, and their growth.  
Everything we build will respect that ethos.

---

## 👋 Built With

### Current Web Implementation (`/log`)
- Next.js
- Tailwind CSS
- Airtable (data storage)
- Web-standard file uploads
- Responsive design

### Mobile Wrapper (v0.1.0)
- Capacitor
- Android WebView
- Native permissions handling
- Play Store deployment configuration

### Future Enhancements Will Add
- Native camera API
- Local storage
- On-device ML capabilities
- Secure data synchronization

---

## 🧠 Development Status

### Current Production Environment
The core functionality of The Spark exists as `/log` in The Catalyst platform:
- Production URL: [catalyst-platform-url]/log
- Token-based authentication
- Web-standard file handling
- Responsive mobile design

### This Repository (wcn-thespark)
Currently implementing v0.1.0:
- Android wrapper around existing functionality
- No modifications to core features
- Focus on native packaging and deployment
- Preparation for future native enhancements

### Development Process
1. Core functionality: ✅ Live in The Catalyst
2. Mobile wrapper: 🚧 In Development
3. Native enhancements: 📅 Planned

---

## ⚖️ License

This project is licensed under the **Apache License 2.0**.  
See [`LICENSE`](./LICENSE) for full terms.

> Yes, it's open source. No, you can't patent it out from under us.  
> Free as in *principled* — not as in "steal this and pivot."

---

## © 2025 What Comes Next?, LLC

Detroit-built. Trainer-powered. AI-enhanced.
