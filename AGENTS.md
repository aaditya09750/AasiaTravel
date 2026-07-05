# AI-Agent Onboarding Notes - Aasia Travel

![Agent Context](https://img.shields.io/badge/Agent-Onboarding-3178C6?style=for-the-badge)
![Code Standards](https://img.shields.io/badge/Standards-Strict-FF6B00?style=for-the-badge)
![Verification](https://img.shields.io/badge/Checks-Lint_%26_Build-22C55E?style=for-the-badge)

Welcome to the Aasia Travel repository! This document contains context and standards optimized for AI-agent pairing.

---

## File Resolution Maps

| Task Objective | Target File | Description |
| :--- | :--- | :--- |
| **Modify Packages** | [packages.ts](file:///c:/SharedData/Projects/Aasia%20Travel/aasiatravel_module1/src/data/packages.ts) | Core array database containing flight codes, hotel stays, steps, and pricing keys |
| **Change Recipient** | [site.ts](file:///c:/SharedData/Projects/Aasia%20Travel/aasiatravel_module1/src/config/site.ts) | Site metadata profile outlining email, phone, and address |
| **Update Templates** | [whatsapp.ts](file:///c:/SharedData/Projects/Aasia%20Travel/aasiatravel_module1/src/data/whatsapp.ts) | Static message constants and text formatter layouts |

---

## Technical Standards to Enforce

### 1. Ref Render-Access Guard
Never access ref properties (like `ref.current`) inside render bodies or JSX parameters. Doing so causes linting exceptions in the `react-hooks/refs` plugin.
* **Bad**: `ref={scrollState.containerRef}` (property access inside render loop)
* **Good**: `const { containerRef } = useScrollContainer(); ... ref={containerRef}`

### 2. Strict Typings
Never use `any` type annotations. All package structures must strictly adhere to the types declared under [src/types/](file:///c:/SharedData/Projects/Aasia%20Travel/aasiatravel_module1/src/types).

### 3. No Scaffolding Noise
Do **NOT** add stub comments (like `// TODO: implement`) inside components or helpers. Out-of-scope roadmaps must be documented in [README.md](file:///c:/SharedData/Projects/Aasia%20Travel/aasiatravel_module1/README.md) only.
