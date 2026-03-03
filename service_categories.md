# Automation Services — Category Framework

---

## 1. Client & Lead Management

> **n8n coverage: Strong** — Lead Generation (562 templates), CRM (318), Sales (1,184)

| Service | Description | n8n Support |
|---|---|---|
| **Client Onboarding** | Automatically collect, organize, and store new client information, signed agreements, and required documents without manual follow-up. | Direct template: [client onboarding with form](https://n8n.io/workflows/8977). Web Form → Google Sheets/CRM → AI analysis. |
| **Lead Routing & CRM Updates** | Capture leads from web forms, ads, or social media — auto-assign to the right rep, update the CRM, and trigger the next step in your funnel. | Strong. Templates for Typeform/Webflow → HubSpot/Salesforce/Pipedrive routing. Deduplication via OpenAI. |
| **Follow-Up Sequences** | Automatically send follow-ups to leads, clients, or prospects based on actions they take (or don't take), keeping communication consistent and timely. | Strong. Lead nurturing campaign templates with multi-channel (email, SMS, social) triggers based on behavior. |
| **Appointment Scheduling** | Eliminate back-and-forth emails by auto-scheduling meetings based on real-time calendar availability, with confirmation emails and reminders. | Moderate. Google Calendar + Slack/email integrations exist. May need Calendly/Cal.com webhook as trigger. |

---

## 2. Billing & Financial Operations

> **n8n coverage: Moderate** — Invoice Processing (164 templates), QuickBooks/Stripe/Xero integrations available

| Service | Description | n8n Support |
|---|---|---|
| **Invoice & Payment Automation** | Create and send invoices, track payments, and follow up with late payers automatically. | Good. 164 invoice processing templates. Stripe + QuickBooks Online nodes exist natively. AI-powered OCR parsing for incoming invoices. |
| **Contractor Expense Matching** | Track receipts and match them to the correct customer or job using purchase order data, saving hours of manual bookkeeping. | Partial. Requires custom build: receipt OCR (AI node) → match against PO data in Sheets/DB → QuickBooks sync. No off-the-shelf template. |
| **Accounts Payable / Receivable Sync** | Connect billing tools (QuickBooks, Stripe, etc.) to your CRM or project management system so financial data stays consistent without re-entry. | Good. Native QuickBooks, Stripe, Xero nodes. Templates for syncing payment events to CRM records. |

---

## 3. Documents & Data Collection

> **n8n coverage: Strong** — Document Ops (958 templates), AI (5,815 templates)

| Service | Description | n8n Support |
|---|---|---|
| **Document Collection & Organization** | Request, receive, and file key documents from clients without chasing them down or manually uploading files. | Strong. Templates for email attachment → Google Drive/Dropbox with auto-naming and folder routing. PDF extraction + OCR. |
| **AI-Powered Form Responses** | Extract and analyze answers from intake forms, then categorize or route submissions to the appropriate workflows automatically. | Strong. Massive AI template library. OpenAI/Claude nodes for parsing, NLP classification, and routing form data. |
| **Email Sorting & Routing** | Automatically categorize, forward, or tag emails based on keywords, sender, or context — so the right person sees it and nothing gets missed. | Strong. Bulk email parsing templates. AI-powered sentiment/intent classification → Slack/CRM routing. |

---

## 4. Reporting & Analytics

> **n8n coverage: Moderate** — No dedicated "reporting" category, but Market Research (811 templates) + data transformation nodes

| Service | Description | n8n Support |
|---|---|---|
| **Reporting & Dashboards** | Generate real-time dashboards or scheduled reports by pulling data from multiple tools and consolidating it into a single view. | Partial. n8n can pull and aggregate data (cron → API calls → Google Sheets). But dashboarding itself needs external tools (Metabase, Looker, Google Data Studio). n8n is the data pipeline, not the visualization layer. |
| **KPI Alerts & Anomaly Detection** | Monitor key business metrics and notify stakeholders when thresholds are breached or trends shift unexpectedly. | Good. Cron triggers → API pulls → IF conditions → Slack/email alerts. AI nodes can add anomaly detection logic. |
| **Cross-System Data Consolidation** | Unify data from disconnected SaaS tools (CRM, accounting, project mgmt, marketing) into a single source of truth. | Strong. CRM-to-Sheets sync templates (Salesforce/HubSpot/Pipedrive → Google Sheets with OpenAI dedup). This is n8n's sweet spot. |

---

## 5. Internal Operations & Team Productivity

> **n8n coverage: Moderate** — Support (687 templates), HR (175 templates), plus Slack/Teams/Asana/Trello integrations

| Service | Description | n8n Support |
|---|---|---|
| **Task Assignment & Project Kickoffs** | Automatically create and assign tasks based on incoming projects or client requests, keeping your team organized from day one. | Good. Trello, Asana, ClickUp, Jira nodes. Templates for form submission → task creation → team assignment. |
| **Internal Alerts & Notifications** | Notify the right team member instantly when a high-priority form is submitted, payment is received, or a support ticket comes in. | Strong. Incident response templates. Webhook → condition check → Slack/Teams/email notification routing. Native support for all major messaging platforms. |
| **Access & Account Provisioning** | Automatically create and assign user access, folders, or permissions when onboarding new clients or team members. | Partial. Google Workspace and Microsoft 365 nodes exist, but provisioning workflows are mostly custom builds. HR templates (175) cover some onboarding flows. |

---

## 6. Inventory & Supply Chain

> **n8n coverage: Limited** — No dedicated category, but e-commerce integrations (Shopify, WooCommerce) and ERP sync templates exist

| Service | Description | n8n Support |
|---|---|---|
| **Inventory Syncing & Low-Stock Alerts** | Monitor inventory levels across systems and trigger alerts or restock tasks when stock runs low. | Partial. Shopify/WooCommerce inventory webhooks → alert workflows exist. Custom ERP integrations via HTTP node. Template for "inventory and order sync" between e-commerce and ERP. |
| **Purchase Order Tracking** | Automatically update order status across vendor, warehouse, and customer-facing systems. | Partial. Order processing and fulfillment notification templates exist. Cross-system PO tracking is a custom build using HTTP/webhook nodes. |

---

## n8n Platform Summary

**8,515 total community templates** across these categories:

| n8n Category | Templates | Our Service Categories Served |
|---|---|---|
| AI | 5,815 | All (cross-cutting: doc parsing, form analysis, smart routing) |
| Marketing | 2,650 | 1. Client & Lead Mgmt, 4. Reporting |
| Sales | 1,184 | 1. Client & Lead Mgmt |
| Document Ops | 958 | 3. Documents & Data Collection |
| Market Research | 811 | 4. Reporting & Analytics |
| Support | 687 | 5. Internal Ops |
| Lead Generation | 562 | 1. Client & Lead Mgmt |
| Social Media | 490 | 1. Client & Lead Mgmt (demand gen) |
| CRM | 318 | 1. Client & Lead Mgmt, 4. Reporting |
| HR | 175 | 5. Internal Ops |
| Invoice Processing | 164 | 2. Billing & Financial Ops |
| DevOps | 345 | (not directly relevant) |

### Where n8n is strongest (can deliver fast with templates):
- Lead capture, routing, and CRM sync
- Document parsing and AI-powered form handling
- Email monitoring and notification routing
- Follow-up sequences and nurture campaigns

### Where n8n needs custom work (our value-add):
- Contractor expense matching and advanced bookkeeping logic
- Dashboard/visualization (n8n feeds data, need Metabase/Looker/etc. for display)
- Account provisioning and access management
- Inventory/supply chain (limited native e-commerce depth)
- Complex multi-system financial reconciliation

---

## Comparable Businesses

| Company | URL | Positioning |
|---|---|---|
| **NextGen Partners (NGP)** | ngpllc.co | Custom automation for SMBs — eliminate repetitive tasks, streamline ops |
| **Automation House** | automation.house | AI, BI, NoCode/LowCode implementations — customer service, HR, marketing, finance |
| **SmartSites** | smartsites.com | Marketing automation, AI content, workflow integration — $500-$5k/mo retainers |
| **Optimal Business Consulting** | optimalbusinessconsulting.com | CRM & marketing automation (HubSpot, Salesforce, Pardot) — mid-market focus |
| **Bitovi** | bitovi.com/n8n-automation-consulting | n8n-specific consulting and implementation |
| **Flowmondo** | flowmondo.com | n8n expert consulting and implementation |

---

## Engagement Models

| Model | How it Works | Best For |
|---|---|---|
| **One-Time Build** | Scoped project, fixed price, delivered and handed off | Clients with clear, well-defined needs |
| **Audit → Build → Maintain** | Discovery phase, then implementation, then ongoing support retainer | Clients who don't know where to start |
| **Monthly Retainer** | Ongoing hours for building new automations + maintaining existing ones | Clients with continuous automation needs |
| **Productized Packages** | Pre-built solutions (e.g., "Client Onboarding Starter") with light customization | Repeatable, scalable revenue |

---

## Platform Toolkit (not married to any one)

- **n8n** — open-source, self-hostable, 1000+ integrations, AI workflow builder
- **Make (Integromat)** — visual, strong for marketing/ops automations
- **Zapier** — largest integration library, good for simple triggers
- **Custom code** — Python/Node scripts for anything the platforms can't handle
- **AI/LLM layers** — GPT, Claude, etc. for document parsing, form analysis, smart routing
