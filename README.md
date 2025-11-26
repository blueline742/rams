# InstantRAMS (Pay-Per-Doc)

## Concept
A "Vending machine" for UK Health & Safety documents. Users can instantly generate and purchase essential documents like RAMS (Risk Assessment Method Statements) and COSHH (Control of Substances Hazardous to Health) Assessments without the need for accounts or subscriptions.

## Core Features
*   **Instant Document Generation:** Generate UK Health & Safety documents on demand.
*   **Pay-Per-Document Model:** Simple, one-time payment for each document.
*   **Client-Side PDF Generation:** Efficient and cost-effective document creation.
*   **Official UK Terminology:** Use precise terms such as "COSHH Assessment" and "HSE Guidelines."
*   **Boringly Official Aesthetic:** Output PDFs adhere to a formal, official look with Times New Roman, tables, and signature boxes.

## Technology Stack
*   **Frontend:** Next.js (hosted on Vercel for optimal performance and scalability).
*   **Database:** None. All ephemeral state is managed client-side (URL or local storage) until payment is processed.
*   **Payments:** Stripe (integrated for secure and straightforward one-time payments).
*   **PDF Engine:** `jspdf` or `react-pdf` (for client-side PDF generation, reducing server load and costs).

## Guiding Principles
1.  **No User Accounts:** The service is designed for immediate use. There is no "Sign Up" or account management; the process is purely "Create & Buy."
2.  **Professional Output:** All generated PDF documents must project a "boringly official" appearance, utilizing standard elements like Times New Roman font, structured tables, and a designated signature box, aligning with UK regulatory expectations.
3.  **UK-Specific Language:** Strict adherence to UK Health & Safety terminology is mandatory, including phrases like "COSHH Assessment" and references to "HSE Guidelines."
