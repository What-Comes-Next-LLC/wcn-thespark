# The Spark Mobile App Launch Strategy Notes

## Update: 2025-04-25

---

## Current Reflection: Leadership and Engineering Reality

The fundamental problem with software development isn't the software.  
**It's the people.**

Over the last sprint, it became crystal clear:
- Inconsistent discipline kills projects faster than technical debt.
- LLM agents will hallucinate easy shortcuts if you don't rein them in.
- Engineers will "optimize" systems without regard for the long-term plan unless explicit boundaries exist.

This phase reinforced something critical:

> Building The Spark isn't just about "getting the app working."  
> It's about **building a culture** where clarity, discipline, and durability matter more than short-term hacks.

There is no team here yet—  
only a founder building the conditions for a future team that deserves to exist.

---

## Anecdotes from the Frontline

- ✅ After eight hours of iterative rebuilds, user authentication succeeded in mobile WebView — validated not by UI but by direct database inspection. ("Logs lie. Code lies. Database doesn't.")
- ✅ Authentication flow built modularly under duress, protecting against future drift.
- ✅ Debugging required switching between CLI, Android SDK, Chrome DevTools, and Supabase Admin — proving solo system management capacity.

---

## Executive Conclusion

- **Fire the engineers (philosophically).** Reset the technical culture.
- **Hire for discipline.** Technology changes daily—discipline doesn’t.
- **Do not move forward on structural changes without explicit architecture review.**

---

## Current Tactical Status

- Mobile auth complete.
- WebView integration complete.
- Token forwarding verified.
- Logger integration pending cosmetic improvement.
- Mobile platform launchable for functional demo.

---

## Lessons Learned: File Upload, Storage Policies, and Full System Debugging

- **Storage ≠ Database**: Supabase Storage file upload and Postgres metadata inserts are two different operations; both require their own security policies.
- **Default Supabase Storage policies are folder-based**: but custom simpler policies (bucket-only checks) are more appropriate when users upload to `/user_id/filename` structure.
- **400 POST errors indicate storage policy or contentType mismatches**: explicitly setting `contentType: file.type` during upload prevents silent WebView issues.
- **RLS (Row Level Security) must be checked both on database table AND storage bucket separately**: one successful insert doesn't imply success for the other.
- **Verbose logging saves hours**: dumping objects before insert catches type mismatches and undefined fields immediately.
- **Emotional Regulation Matters**: Recognizing when a sigh of relief (time extension) arrives is just as important as technical debugging.

---

## Future Standing Orders

- No production deployment without root database validation.
- No auth architecture modification without written proposal.
- No rearchitecting bridges without API-level impact analysis.
- No storage bucket created without immediate accompanying storage policies.
- No Storage uploads attempted without verifying explicit contentType definition.

---

End of Phase One.  
Next: Build a team that deserves to inherit this infrastructure.

