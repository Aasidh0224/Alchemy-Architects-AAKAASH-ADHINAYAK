# References and Research Register

**Report date:** 20 October 2026. Recheck documentation, endpoint policies, datasets, licences and pricing before implementation.

## Project-specific material
1. [AAKAASH ADHINAYAK hosted prototype](https://aakaash-adhinayak.ai.studio/). The available retrieval exposed the application title but did not provide inspectable rendered interactions or source. It verifies deployment identity only; it does not prove features.
2. SIH conversation export: *ChatGPT-SIH 2026 Participation Guide-20261020-1424.pdf*, especially the late blueprint pages 713–729. This captures the requirements history, not a source-code audit.
3. [Google AI Studio deployment documentation](https://ai.google.dev/gemini-api/docs/aistudio-deploying). Platform guidance, not evidence that the application uses particular services.

## Technical and data references
4. [AviationWeather.gov Data API](https://aviationweather.gov/data/api/) — candidate public aviation weather products; verify availability, limits, schema and terms before implementing a connector.
5. [AviationWeather.gov data help](https://aviationweather.gov/help/data/) — product descriptions and field context.
6. [NASA Prognostics Center of Excellence dataset repository](https://www.nasa.gov/intelligent-systems-division/discovery-and-systems-health/pcoe/pcoe-data-set-repository/) — candidate prognostics datasets; obtain the exact artefact and check its README/terms. Simulation data must not be portrayed as real aircraft engine telemetry.
7. [Google OR-Tools CP-SAT documentation](https://developers.google.com/optimization/cp/cp_solver) — reference for a future constraint-solver implementation. This edition uses a deterministic heuristic, not OR-Tools.
8. [NIST AI Risk Management Framework 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf) — reliability, validity, transparency and AI risk-management context.
9. [NIST Secure Software Development Framework SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) — secure development lifecycle reference.
10. [OWASP API Security Top 10 (2023)](https://api-security.owasp.org/editions/2023/en/0x11-t10/) — future API security risks.
11. [Firebase Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started) — relevant only if Firebase storage is added in a future version.
12. [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) — accessibility reference; inclusion here is not a conformance claim.
13. [Google Cloud Run pricing](https://cloud.google.com/run/pricing) — indicative provider pricing documentation; actual charges depend on configuration and region.
14. [UN Sustainable Development Goal 9](https://india.un.org/en/sdgs/9) — thematic reference to innovation and infrastructure, not a certification of project impact.

## Evidence limits
Documentation describes available methods and services. It does not prove this app has integrated them. No public-data connector, trained predictive model, external LLM, Firebase persistence, performance superiority or customer demand is claimed in the current demo.
