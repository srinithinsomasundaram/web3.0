export type AccountsFeatureSlug =
  | "single-sign-on"
  | "multi-factor-authentication"
  | "passkeys"
  | "organization-management"
  | "oauth-api"
  | "session-management"
  | "smart-login"
  | "india"
  | "usa"
  | "uk"
  | "australia"
  | "singapore"
  | "dubai";

export type AccountsFeature = {
  slug: AccountsFeatureSlug;
  category: "feature" | "geo";
  seo: {
    pageTitle: string;
    description: string;
    keywords: string;
    canonical: string;
    h1: string;
    subheading: string;
  };
  badge: string;
  overview: string;
  bullets: string[];
  whyItMatters: string;
  faq: { q: string; a: string }[];
};

export const accountsFeatures: AccountsFeature[] = [
  // ── Features ──────────────────────────────────────────────────────────
  {
    slug: "single-sign-on",
    category: "feature",
    badge: "Core Feature",
    seo: {
      pageTitle: "Single Sign-On (SSO) Platform | Yesp Accounts | Yesp Corporation",
      description:
        "Yesp Accounts provides enterprise-grade SSO with OIDC and OAuth2 support. Let users sign in once across all your applications — secure, seamless, and developer-ready.",
      keywords:
        "single sign-on SSO platform, OIDC SSO provider, OAuth2 SSO, enterprise SSO solution, SSO authentication platform India, custom SSO development, auth0 alternative SSO, identity provider SSO, federated identity SSO",
      canonical: "https://yespstudio.com/yesp-accounts/single-sign-on",
      h1: "Single Sign-On (SSO) for Modern Applications",
      subheading: "One identity. Every app. Zero repeated logins. Yesp Accounts SSO connects all your applications to a single authentication layer.",
    },
    overview:
      "Yesp Accounts delivers enterprise SSO built on open standards — OIDC (OpenID Connect) and OAuth 2.0. Users authenticate once and gain seamless access to every connected application without repeated login prompts.",
    bullets: [
      "OIDC and OAuth2 compliant identity provider",
      "Supports authorization code flow, PKCE, client credentials and implicit flows",
      "Connect any application — web, mobile, backend, third-party SaaS",
      "Custom branded login portal per application or organisation",
      "Session federation across multiple domains and apps",
      "Machine-to-machine (M2M) token support for backend services",
      "Token introspection, revocation and rotation built-in",
    ],
    whyItMatters:
      "Without SSO, users juggle separate credentials for every application — creating friction, support burden and security exposure from password reuse. Yesp Accounts SSO eliminates this entirely: one login, one session, every service.",
    faq: [
      {
        q: "What SSO standards does Yesp Accounts support?",
        a: "Yesp Accounts supports OpenID Connect (OIDC) and OAuth 2.0 — the industry standard protocols used by Google, Microsoft and AWS. Any application that supports OIDC can connect to Yesp Accounts SSO.",
      },
      {
        q: "Can I white-label the Yesp Accounts SSO login page?",
        a: "Yes. Every SSO application in Yesp Accounts gets a fully customisable login experience — branded with your logo, colours and domain. No Yesp branding appears to your users unless you choose it.",
      },
      {
        q: "Does Yesp Accounts SSO support machine-to-machine authentication?",
        a: "Yes. Yesp Accounts supports the OAuth2 Client Credentials flow for M2M authentication — enabling backend services, APIs and automation pipelines to authenticate securely without user interaction.",
      },
      {
        q: "Is Yesp Accounts SSO self-hostable?",
        a: "Yes. Yesp Accounts can be self-hosted on your own infrastructure — giving you full data residency, compliance control, and no dependency on third-party auth infrastructure.",
      },
    ],
  },

  {
    slug: "multi-factor-authentication",
    category: "feature",
    badge: "Security Layer",
    seo: {
      pageTitle: "Multi-Factor Authentication (MFA) Platform | Yesp Accounts | Yesp Corporation",
      description:
        "Yesp Accounts provides flexible MFA — TOTP authenticator apps, email OTP, SMS OTP, and passkeys. Add a second layer of identity verification to every login flow.",
      keywords:
        "multi-factor authentication MFA platform, TOTP MFA, email OTP authentication, SMS OTP login, MFA for SaaS applications, two-factor authentication 2FA, enterprise MFA solution, auth0 alternative MFA, MFA authentication India",
      canonical: "https://yespstudio.com/yesp-accounts/multi-factor-authentication",
      h1: "Multi-Factor Authentication for Every Login",
      subheading: "TOTP. Email OTP. Passkeys. Yesp Accounts MFA adds a second identity verification layer to every login — for every user, every application.",
    },
    overview:
      "Yesp Accounts provides multiple MFA methods out of the box — TOTP authenticator apps (Google Authenticator, Authy), email one-time passwords, SMS OTP, and hardware-backed passkeys. Users can enrol and manage their own MFA factors from the self-service account console.",
    bullets: [
      "TOTP authenticator app support (Google Authenticator, Authy, 1Password)",
      "Email OTP with configurable expiry and rate limiting",
      "SMS OTP via configurable SMS provider",
      "Passkeys (WebAuthn/FIDO2) as a phishing-resistant MFA factor",
      "Per-user MFA factor management via self-service console",
      "Admin-enforced MFA policies per organisation or application",
      "MFA challenge flow integrated directly into the Yesp Accounts login UI",
    ],
    whyItMatters:
      "Passwords alone are no longer sufficient — credential stuffing, phishing and data breaches expose password-only accounts constantly. MFA is the single highest-impact security control for user accounts, reducing account takeover risk by over 99% for the attack vectors it covers.",
    faq: [
      {
        q: "What MFA methods does Yesp Accounts support?",
        a: "Yesp Accounts supports TOTP authenticator apps (Google Authenticator, Authy, 1Password), email OTP, SMS OTP, and passkeys (WebAuthn/FIDO2). Users can enrol multiple factors and administrators can enforce specific methods per application or organisation.",
      },
      {
        q: "Can administrators require MFA for all users in an organisation?",
        a: "Yes. Yesp Accounts supports admin-enforced MFA policies — requiring users to enrol at least one MFA factor before accessing protected applications. Organisations can mandate TOTP, passkeys, or any combination of supported factors.",
      },
      {
        q: "Can users manage their own MFA factors?",
        a: "Yes. The Yesp Accounts self-service console allows users to enrol, test, and remove their own MFA factors — without requiring admin intervention. This reduces support burden for MFA management.",
      },
    ],
  },

  {
    slug: "passkeys",
    category: "feature",
    badge: "Phishing-Resistant Auth",
    seo: {
      pageTitle: "Passkey Authentication — WebAuthn & FIDO2 | Yesp Accounts | Yesp Corporation",
      description:
        "Yesp Accounts supports passkeys — WebAuthn and FIDO2 hardware-backed authentication. Eliminate passwords entirely. Ship phishing-resistant login with biometrics, Touch ID, and security keys.",
      keywords:
        "passkey authentication, WebAuthn passkeys, FIDO2 authentication, passwordless login platform, biometric authentication, hardware security key login, passkey developer platform, auth0 passkeys alternative, passkey SSO",
      canonical: "https://yespstudio.com/yesp-accounts/passkeys",
      h1: "Passkey Authentication — Passwordless Login with WebAuthn",
      subheading: "No passwords. No phishing. Touch ID, Face ID, or security keys — Yesp Accounts passkeys deliver hardware-backed authentication for every application.",
    },
    overview:
      "Yesp Accounts passkeys use the WebAuthn (W3C Web Authentication) and FIDO2 standards to deliver cryptographic, hardware-backed authentication. Private keys never leave the device — making passkeys immune to phishing, credential stuffing and server-side database breaches.",
    bullets: [
      "WebAuthn (Level 2) and FIDO2 compliant passkey implementation",
      "Platform authenticators: Touch ID, Face ID, Windows Hello, Android biometrics",
      "Roaming authenticators: YubiKey, Titan Security Key, any FIDO2 hardware key",
      "Passkey as primary login factor (passwordless) or as MFA second factor",
      "Cross-device passkey support via platform sync (iCloud Keychain, Google Password Manager)",
      "Passkey enrolment and management in the self-service console",
      "Fallback flows for devices without passkey support",
    ],
    whyItMatters:
      "Passkeys are the most secure login method available today — private keys are device-bound, biometrically protected and cryptographically tied to your specific application domain, making phishing mathematically impossible. They also deliver a faster, frictionless login experience compared to password + MFA combinations.",
    faq: [
      {
        q: "What are passkeys and how do they work in Yesp Accounts?",
        a: "Passkeys are WebAuthn/FIDO2 credentials stored in a device's secure hardware (Touch ID, Face ID, Windows Hello, or a security key). When logging in, the device signs a cryptographic challenge with the private key — the server verifies the signature without ever seeing the private key. Yesp Accounts handles the full passkey registration and authentication flow.",
      },
      {
        q: "Can passkeys replace passwords entirely in Yesp Accounts?",
        a: "Yes. Yesp Accounts supports fully passwordless authentication using passkeys as the sole login factor — eliminating passwords and MFA codes simultaneously. Users register a passkey once and authenticate with biometrics or a security key going forward.",
      },
      {
        q: "Are passkeys in Yesp Accounts phishing-resistant?",
        a: "Yes. Because the passkey's cryptographic signature is domain-bound to your application's origin, it cannot be used on a phishing site — even an identical-looking fake login page. This makes passkey authentication immune to the phishing attacks that defeat passwords and SMS OTP.",
      },
    ],
  },

  {
    slug: "organization-management",
    category: "feature",
    badge: "Multi-Tenant",
    seo: {
      pageTitle: "Multi-Tenant Organization Management | Yesp Accounts | Yesp Corporation",
      description:
        "Yesp Accounts provides built-in multi-tenant organization management — separate user namespaces, role-based access, SSO per org, and admin controls. Built for B2B SaaS applications.",
      keywords:
        "multi-tenant authentication, organization management auth, B2B SaaS authentication, tenant isolation authentication, organization SSO, role-based access control SaaS, B2B auth platform, multi-tenant user management, auth0 organizations alternative",
      canonical: "https://yespstudio.com/yesp-accounts/organization-management",
      h1: "Multi-Tenant Organization Management for B2B Applications",
      subheading: "Separate namespaces. Per-org SSO. Role-based access. Yesp Accounts organisations give your B2B SaaS the multi-tenant auth layer it needs from day one.",
    },
    overview:
      "Yesp Accounts organisations give every B2B SaaS application a complete multi-tenant identity layer. Each organisation is an isolated namespace with its own users, roles, applications, and SSO configuration — allowing your customers to bring their own identity provider or use Yesp Accounts auth.",
    bullets: [
      "Organisation-scoped user namespaces with complete isolation",
      "Per-organisation SSO configuration (OIDC/OAuth2 identity providers)",
      "Role-based access control (RBAC) with custom roles per organisation",
      "Organisation invitation flows and member management",
      "Admin console for organisation creation, management and audit",
      "Organisation-scoped application permissions and token scopes",
      "Org-level MFA policy enforcement",
    ],
    whyItMatters:
      "B2B SaaS applications need to serve enterprise customers who have their own identity providers, IT policies and user directories. Without proper multi-tenant auth, you either lock enterprise customers out or build expensive custom integrations for each one. Yesp Accounts organisations solve this at the infrastructure level.",
    faq: [
      {
        q: "How does organisation management work in Yesp Accounts?",
        a: "Each organisation in Yesp Accounts is an isolated tenant with its own users, roles, SSO configuration and application permissions. B2B SaaS customers can be onboarded as separate organisations, each with their own identity settings — without cross-contamination of user data.",
      },
      {
        q: "Can organisations in Yesp Accounts use their own SSO provider?",
        a: "Yes. Each organisation can configure its own OIDC/OAuth2 identity provider — allowing enterprise customers to authenticate via their corporate Okta, Azure AD, Google Workspace, or any other OIDC-compatible provider.",
      },
      {
        q: "Does Yesp Accounts organisations support role-based access control?",
        a: "Yes. RBAC is built in at the organisation level — defining custom roles, assigning permissions to roles, and assigning roles to users within each organisation. Roles and permissions are scoped per organisation and reflected in JWT token claims.",
      },
    ],
  },

  {
    slug: "oauth-api",
    category: "feature",
    badge: "Developer API",
    seo: {
      pageTitle: "OAuth2 & OIDC Authentication API | Yesp Accounts | Yesp Corporation",
      description:
        "Yesp Accounts exposes a fully compliant OAuth2 and OIDC API. Add authentication to any application — web, mobile, backend, CLI — with standard token flows, introspection, and JWKS endpoints.",
      keywords:
        "OAuth2 authentication API, OIDC API provider, authentication API for developers, JWT authentication API, token introspection endpoint, JWKS endpoint, OAuth2 authorization server, auth API India, custom authentication API, developer authentication platform",
      canonical: "https://yespstudio.com/yesp-accounts/oauth-api",
      h1: "OAuth2 & OIDC Authentication API for Developers",
      subheading: "Standard-compliant. Developer-first. Yesp Accounts exposes the full OAuth2 and OIDC API surface — so any application, language or framework can authenticate.",
    },
    overview:
      "Yesp Accounts acts as a fully compliant OAuth2 authorization server and OIDC identity provider — exposing all standard endpoints developers expect. Any application that can speak OAuth2 can integrate with Yesp Accounts without custom code.",
    bullets: [
      "Authorization endpoint (authorization code flow with PKCE)",
      "Token endpoint (access token, refresh token, ID token issuance)",
      "UserInfo endpoint (OIDC standard claims)",
      "Token introspection endpoint (RFC 7662)",
      "Token revocation endpoint (RFC 7009)",
      "JWKS endpoint for public key discovery",
      "OpenID Connect Discovery (/.well-known/openid-configuration)",
      "Management API for user, organisation and application CRUD",
      "Webhook support for auth events (login, register, MFA, password change)",
    ],
    whyItMatters:
      "Standard compliance means your engineering team doesn't need to learn proprietary APIs. Every major language has OAuth2/OIDC client libraries — integrate Yesp Accounts in hours, not weeks, using libraries your team already knows.",
    faq: [
      {
        q: "Is the Yesp Accounts API fully OAuth2 and OIDC compliant?",
        a: "Yes. Yesp Accounts implements the OAuth 2.0 Authorization Framework (RFC 6749), OAuth 2.0 Bearer Tokens (RFC 6750), PKCE (RFC 7636), Token Introspection (RFC 7662), Token Revocation (RFC 7009), and OpenID Connect Core 1.0. All standard endpoints are exposed.",
      },
      {
        q: "What programming languages can integrate with the Yesp Accounts API?",
        a: "Any language with an OAuth2/OIDC client library — which includes every major language: JavaScript/TypeScript, Python, Go, Java, Ruby, PHP, Rust, Swift, Kotlin, .NET/C#, and more. Standard compliance means no proprietary SDK is required.",
      },
      {
        q: "Does Yesp Accounts support webhooks for authentication events?",
        a: "Yes. Yesp Accounts fires webhooks for key authentication events — user registration, login, MFA enrolment, password change, session revocation, and organisation membership changes — allowing downstream systems to react to identity events in real time.",
      },
    ],
  },

  {
    slug: "session-management",
    category: "feature",
    badge: "Session Control",
    seo: {
      pageTitle: "Session Management & Active Session Control | Yesp Accounts | Yesp Corporation",
      description:
        "Yesp Accounts gives users and admins full visibility into active sessions — with remote revocation, device tracking, suspicious session detection, and session federation across applications.",
      keywords:
        "session management authentication, active session control, remote session revocation, user session visibility, device session tracking, session security platform, auth session management, force logout authentication, session federation SSO",
      canonical: "https://yespstudio.com/yesp-accounts/session-management",
      h1: "Session Management & Active Session Control",
      subheading: "See every device. Revoke any session. Yesp Accounts gives users and administrators full visibility and control over every active authentication session.",
    },
    overview:
      "Yesp Accounts provides a complete session management layer — users can see every active device and session from their self-service console, and administrators have full visibility into organisation-wide session activity with the ability to force-revoke any session.",
    bullets: [
      "Per-user active session list with device, browser, IP, and last-seen data",
      "One-click session revocation from the user self-service console",
      "Admin-level session visibility across the full organisation",
      "Force logout for all sessions — immediate token revocation",
      "Session federation: one session covers all connected SSO applications",
      "Configurable session lifetime and idle timeout per application",
      "Suspicious session detection (new device, new location, unusual activity)",
    ],
    whyItMatters:
      "When a user loses a device or suspects a compromise, being able to revoke all sessions instantly is critical. Most auth platforms treat sessions as a black box — Yesp Accounts makes them fully transparent and controllable for both users and administrators.",
    faq: [
      {
        q: "Can users see and revoke their own sessions in Yesp Accounts?",
        a: "Yes. The Yesp Accounts self-service console shows every active session — with device type, browser, IP address, location and last activity time. Users can revoke individual sessions or log out of all devices simultaneously.",
      },
      {
        q: "Can administrators force-revoke sessions across an organisation?",
        a: "Yes. Organisation administrators have a session management panel showing all active sessions for all members. Admins can revoke individual user sessions or force-logout all users simultaneously — useful for security incidents or offboarding.",
      },
      {
        q: "How does session management work across SSO-connected applications?",
        a: "Yesp Accounts uses a federated session model — a single Yesp Accounts session can cover multiple SSO-connected applications. Revoking the session at the Yesp Accounts level terminates access to all connected applications immediately via token revocation.",
      },
    ],
  },

  {
    slug: "smart-login",
    category: "feature",
    badge: "Intelligent Auth",
    seo: {
      pageTitle: "Smart Login — Intelligent Authentication Flow | Yesp Accounts | Yesp Corporation",
      description:
        "Yesp Accounts Smart Login adapts the authentication challenge based on user context — device trust, location, risk signals, and session history. Less friction for trusted users. More security when it matters.",
      keywords:
        "smart login authentication, adaptive authentication, risk-based authentication, intelligent login flow, contextual authentication, device trust authentication, low-friction login, adaptive MFA, smart auth platform",
      canonical: "https://yespstudio.com/yesp-accounts/smart-login",
      h1: "Smart Login — Adaptive Authentication for Every User",
      subheading: "Trusted device? Instant access. New device or unusual context? Step up to MFA. Yesp Accounts Smart Login matches security to risk, automatically.",
    },
    overview:
      "Yesp Accounts Smart Login uses contextual signals — device fingerprint, login history, IP reputation, and session patterns — to determine the appropriate authentication challenge for each login attempt. Low-risk logins flow through instantly; high-risk logins trigger step-up verification.",
    bullets: [
      "Device trust recognition — fewer MFA prompts on recognised devices",
      "IP reputation checking — flag or block known malicious IPs",
      "Contextual login approval — push notification to trusted device for new device logins",
      "Unusual location detection — step-up verification for anomalous geography",
      "Configurable risk thresholds per application or organisation",
      "Smart Login approval flow — push-to-approve on secondary device",
      "Audit log of all smart login decisions with context data",
    ],
    whyItMatters:
      "Security and UX have always been in tension — more security means more friction. Smart Login resolves this by applying security proportionally: trusted users get a frictionless experience, while unknown or suspicious contexts receive proportional verification challenges.",
    faq: [
      {
        q: "What is Smart Login in Yesp Accounts?",
        a: "Smart Login is Yesp Accounts' adaptive authentication system — it evaluates contextual signals at login time (device, IP, location, session history) to determine whether to allow instant access, request MFA, or trigger a push-to-approve flow on a trusted device.",
      },
      {
        q: "How does the Smart Login approval flow work?",
        a: "When a user logs in from an unrecognised device, Yesp Accounts can send a push notification to a previously trusted device (e.g. their phone). The user approves or denies the new login from their trusted device — providing a seamless secondary verification without typing codes.",
      },
      {
        q: "Can Smart Login thresholds be configured per application?",
        a: "Yes. Risk thresholds, step-up triggers, and approval flows are configurable per application and per organisation — allowing different security profiles for high-security internal tools versus lower-sensitivity consumer applications.",
      },
    ],
  },

  // ── GEO Pages ─────────────────────────────────────────────────────────
  {
    slug: "india",
    category: "geo",
    badge: "India",
    seo: {
      pageTitle: "Authentication Platform for India — Auth0 Alternative | Yesp Accounts | Yesp Corporation",
      description:
        "Yesp Accounts is an Indian authentication platform — SSO, MFA, passkeys, multi-tenant organisations, OAuth2 API. Built in India, priced for Indian SaaS, compliant with Indian data regulations.",
      keywords:
        "authentication platform India, auth0 alternative India, SSO platform India, MFA platform India, identity management India, OAuth2 provider India, Indian SaaS authentication, DPDP compliant authentication India, user authentication platform India, login system India, identity provider India",
      canonical: "https://yespstudio.com/yesp-accounts/india",
      h1: "Authentication Platform Built for Indian Businesses and SaaS Companies",
      subheading: "SSO. MFA. Passkeys. Multi-tenant orgs. Yesp Accounts is the Auth0 alternative built in India — priced for Indian SaaS, architected for Indian data compliance.",
    },
    overview:
      "Yesp Accounts is an enterprise authentication platform built by Yesp Corporation — based in Erode, Coimbatore, and Bengaluru. Indian SaaS companies and enterprises can use Yesp Accounts to add production-grade authentication to their applications without dependency on expensive US-based auth vendors.",
    bullets: [
      "Built by an Indian engineering team — no dependence on US infrastructure",
      "Data residency in India — host on your own servers or Indian cloud infrastructure",
      "DPDP (Digital Personal Data Protection Act 2023) aware architecture",
      "INR pricing — no currency conversion or dollar-denominated billing risk",
      "Support in IST business hours — no timezone lag for issue resolution",
      "GST-invoiced billing for Indian businesses",
      "Self-hostable — full control over user data within Indian jurisdiction",
    ],
    whyItMatters:
      "Most authentication platforms are US-based, dollar-priced, and designed for Western regulatory environments. Indian SaaS companies pay a currency premium, accept US data transfer risks, and get support in off-hours. Yesp Accounts is built from India, for India.",
    faq: [
      {
        q: "Is Yesp Accounts an Indian alternative to Auth0?",
        a: "Yes. Yesp Accounts is an enterprise authentication platform built by Yesp Corporation — an Indian company based in Tamil Nadu and Bengaluru. It provides SSO, MFA, passkeys, multi-tenant organisations and an OAuth2/OIDC API — the same feature set as Auth0 and similar platforms — at pricing designed for Indian businesses.",
      },
      {
        q: "Is Yesp Accounts compliant with India's DPDP Act 2023?",
        a: "Yesp Accounts is designed with the Digital Personal Data Protection Act 2023 in mind — supporting data localisation (self-hostable), consent management, data minimisation, and the ability to respond to data principal requests. Indian businesses can run Yesp Accounts entirely within Indian infrastructure.",
      },
      {
        q: "Can Indian businesses self-host Yesp Accounts?",
        a: "Yes. Yesp Accounts is self-hostable — you can deploy it on your own servers, on AWS/Azure/GCP within Indian regions, or on any Indian cloud provider. This gives full data residency and eliminates any cross-border data transfer concerns.",
      },
      {
        q: "Does Yesp Accounts support GST invoicing for Indian businesses?",
        a: "Yes. Yesp Accounts billing for Indian businesses is GST-invoiced in INR — no USD conversion, no foreign currency risk, and proper Indian tax documentation for your accounts.",
      },
      {
        q: "How is Yesp Accounts different from Firebase Auth or Supabase Auth for Indian companies?",
        a: "Firebase Auth and Supabase Auth are US-based services with US data residency and USD pricing. Yesp Accounts is built in India, self-hostable within Indian infrastructure, priced in INR, and supported in IST business hours — with enterprise features like multi-tenant organisations and full OIDC compliance that Firebase Auth does not provide.",
      },
    ],
  },

  {
    slug: "usa",
    category: "geo",
    badge: "United States",
    seo: {
      pageTitle: "Authentication Platform for US Businesses | Yesp Accounts | Yesp Corporation",
      description:
        "Yesp Accounts is a self-hostable authentication platform for US businesses — SSO, MFA, passkeys, OAuth2, and multi-tenant organisations. Enterprise auth at a fraction of Auth0 pricing.",
      keywords:
        "authentication platform USA, auth0 alternative United States, self-hosted authentication platform, enterprise SSO USA, OAuth2 provider USA, OIDC platform USA, multi-tenant authentication SaaS, authentication API United States, user identity platform USA, login platform US companies",
      canonical: "https://yespstudio.com/yesp-accounts/usa",
      h1: "Enterprise Authentication Platform for US Businesses",
      subheading: "SSO. MFA. Passkeys. OAuth2. Yesp Accounts gives US companies enterprise-grade authentication — self-hostable, open standards compliant, at 40–60% of comparable platform costs.",
    },
    overview:
      "US businesses spending $20,000–$100,000+ per year on Auth0 or Okta for authentication infrastructure can deploy Yesp Accounts — a fully self-hostable, OIDC-compliant authentication platform — at a significant cost reduction without sacrificing enterprise features.",
    bullets: [
      "Self-hostable on AWS, Azure, GCP, or your own US infrastructure",
      "Full SOC2-ready architecture — data never leaves your infrastructure",
      "OAuth2 and OIDC compliant — works with any existing auth client library",
      "Enterprise SSO, MFA, passkeys, organisations, and session management",
      "No per-MAU pricing surprises — deploy on your own infrastructure",
      "HIPAA-ready deployment option for US healthcare applications",
      "EST timezone support and US-standard engineering engagement",
    ],
    whyItMatters:
      "Auth0 and Okta pricing scales with Monthly Active Users — a SaaS application with 100,000 MAUs can easily spend $50,000–$150,000+ per year on authentication alone. Yesp Accounts eliminates this by running on your own infrastructure at a fixed engineering cost.",
    faq: [
      {
        q: "Is Yesp Accounts a self-hosted alternative to Auth0 for US companies?",
        a: "Yes. Yesp Accounts is a self-hostable enterprise authentication platform — deployable on AWS, Azure, GCP or any US cloud infrastructure. It provides the same core feature set as Auth0 (SSO, MFA, passkeys, OAuth2/OIDC, multi-tenant organisations) without per-MAU pricing.",
      },
      {
        q: "Can Yesp Accounts be deployed in a HIPAA-compliant configuration for US healthcare?",
        a: "Yes. Because Yesp Accounts is self-hostable, US healthcare companies can deploy it within their existing HIPAA-compliant infrastructure — maintaining BAA coverage, PHI isolation, and audit logging requirements without sending user data to a third-party auth vendor.",
      },
      {
        q: "How much cheaper is Yesp Accounts compared to Auth0 for US businesses?",
        a: "Auth0 pricing for 100,000 MAUs can reach $50,000–$150,000+ annually. Yesp Accounts is a self-hosted platform — you pay a one-time or annual engineering fee rather than per-MAU charges. For most US businesses above 10,000 MAUs, Yesp Accounts is significantly cheaper on a total cost of ownership basis.",
      },
    ],
  },

  {
    slug: "uk",
    category: "geo",
    badge: "United Kingdom",
    seo: {
      pageTitle: "Authentication Platform for UK Businesses — GDPR Ready | Yesp Accounts | Yesp Corporation",
      description:
        "Yesp Accounts is a GDPR-ready, self-hostable authentication platform for UK businesses — SSO, MFA, passkeys, OAuth2 API, and multi-tenant organisations. UK data residency. Full ICO compliance support.",
      keywords:
        "authentication platform UK, auth0 alternative UK, GDPR compliant authentication, self-hosted authentication UK, UK data residency authentication, enterprise SSO UK, OIDC provider UK, ICO compliant authentication, identity platform United Kingdom, user authentication UK businesses",
      canonical: "https://yespstudio.com/yesp-accounts/uk",
      h1: "GDPR-Ready Authentication Platform for UK Businesses",
      subheading: "UK data residency. GDPR architecture. SSO, MFA, passkeys, OAuth2. Yesp Accounts gives UK businesses enterprise authentication with full ICO compliance control.",
    },
    overview:
      "UK businesses operating under GDPR and the UK Data Protection Act 2018 need authentication infrastructure that keeps user data within UK jurisdiction. Yesp Accounts is self-hostable — deployable on UK AWS, Azure, or GCP regions — giving UK companies full data residency and GDPR compliance without dependency on US auth vendors.",
    bullets: [
      "Self-hostable on UK AWS (London), Azure (UK South), or GCP (London) regions",
      "UK data residency — no transatlantic personal data transfer",
      "GDPR and UK DPA 2018 compliant architecture",
      "Right to erasure (Article 17) support — full user data deletion",
      "Data portability (Article 20) — user data export on request",
      "Consent management and audit logging for ICO accountability",
      "UK-business hour engineering support via Yesp Corporation",
    ],
    whyItMatters:
      "Many US-based auth platforms process UK user data in US data centres — creating GDPR Article 46 cross-border transfer obligations and ICO exposure. Yesp Accounts self-hosting eliminates this: UK user authentication data stays in UK infrastructure under UK jurisdiction.",
    faq: [
      {
        q: "Is Yesp Accounts GDPR compliant for UK businesses?",
        a: "Yes. Yesp Accounts is self-hostable within UK infrastructure — AWS London, Azure UK South, or any UK data centre — giving full GDPR data residency compliance. The platform architecture supports Article 17 (erasure), Article 20 (portability), and full audit logging for ICO accountability.",
      },
      {
        q: "Can UK businesses deploy Yesp Accounts without sending data to the US?",
        a: "Yes. Because Yesp Accounts is self-hosted, UK businesses can run the entire authentication platform within UK cloud infrastructure — no data leaves the UK, eliminating GDPR Article 46 cross-border transfer requirements.",
      },
      {
        q: "Does Yesp Accounts support right-to-erasure requests under GDPR?",
        a: "Yes. Yesp Accounts supports complete user data deletion — including user records, session history, MFA factors, audit logs (with configurable retention), and OAuth tokens — in support of GDPR Article 17 right to erasure obligations.",
      },
    ],
  },

  {
    slug: "australia",
    category: "geo",
    badge: "Australia",
    seo: {
      pageTitle: "Authentication Platform for Australian Businesses | Yesp Accounts | Yesp Corporation",
      description:
        "Yesp Accounts is a self-hostable authentication platform for Australian businesses — SSO, MFA, passkeys, OAuth2, organisations. Australian data residency. Privacy Act 1988 compliant architecture.",
      keywords:
        "authentication platform Australia, auth0 alternative Australia, Australian Privacy Act authentication, self-hosted authentication Australia, Australian data residency auth, enterprise SSO Australia, OAuth2 provider Australia, user identity platform Australia, login platform Australian companies",
      canonical: "https://yespstudio.com/yesp-accounts/australia",
      h1: "Authentication Platform for Australian Businesses — Privacy Act Ready",
      subheading: "Australian data residency. Privacy Act 1988 aware. SSO, MFA, passkeys. Yesp Accounts gives Australian businesses enterprise authentication without US data transfer.",
    },
    overview:
      "Australian businesses subject to the Privacy Act 1988 and Australian Privacy Principles (APPs) can deploy Yesp Accounts within Australian AWS (Sydney), Azure (Australia East), or any Australian cloud infrastructure — keeping user authentication data in Australian jurisdiction.",
    bullets: [
      "Self-hostable in Australian AWS (Sydney), Azure (Australia East), or GCP (Sydney)",
      "Australian data residency — user data stays in Australia",
      "Privacy Act 1988 and APPs (Australian Privacy Principles) aware architecture",
      "AEST business hours support from Yesp Corporation",
      "My Health Record ecosystem integration awareness for healthcare apps",
      "Full audit logging for Australian regulatory accountability",
      "Enterprise SSO, MFA, passkeys and OAuth2 standard feature set",
    ],
    whyItMatters:
      "Australian businesses handling personal information under the Privacy Act need authentication infrastructure that stays within Australian data borders. Self-hosting Yesp Accounts within Australian cloud infrastructure eliminates cross-border personal data transfer obligations.",
    faq: [
      {
        q: "Is Yesp Accounts suitable for Australian businesses under the Privacy Act?",
        a: "Yes. Yesp Accounts is self-hostable within Australian cloud infrastructure — AWS Sydney, Azure Australia East, or any Australian data centre — enabling Australian businesses to keep user authentication data within Australian jurisdiction under the Privacy Act 1988 and Australian Privacy Principles.",
      },
      {
        q: "Does Yesp Accounts support Australian healthcare applications?",
        a: "Yes. For Australian healthcare applications, Yesp Accounts can be deployed within existing HIPAA/healthcare-compliant infrastructure in Australia, with audit logging and data handling practices appropriate for healthcare data environments. The platform's SSO and MFA capabilities support clinical workforce authentication requirements.",
      },
    ],
  },

  {
    slug: "singapore",
    category: "geo",
    badge: "Singapore",
    seo: {
      pageTitle: "Authentication Platform for Singapore Businesses — PDPA Ready | Yesp Accounts | Yesp Corporation",
      description:
        "Yesp Accounts is a PDPA-ready, self-hostable authentication platform for Singapore businesses — SSO, MFA, passkeys, OAuth2. Singapore data residency. MAS fintech awareness.",
      keywords:
        "authentication platform Singapore, auth0 alternative Singapore, PDPA compliant authentication Singapore, self-hosted authentication Singapore, Singapore data residency authentication, enterprise SSO Singapore, MAS authentication Singapore, identity platform Singapore, OAuth2 provider Singapore",
      canonical: "https://yespstudio.com/yesp-accounts/singapore",
      h1: "PDPA-Ready Authentication Platform for Singapore Businesses",
      subheading: "Singapore data residency. PDPA compliance. MAS fintech awareness. SSO, MFA, passkeys — enterprise authentication for Singapore enterprises and startups.",
    },
    overview:
      "Singapore businesses subject to the Personal Data Protection Act (PDPA) and MAS Technology Risk Management Guidelines can deploy Yesp Accounts within Singapore AWS or GCP infrastructure — delivering enterprise authentication with full data localisation.",
    bullets: [
      "Self-hostable in Singapore AWS, GCP (Singapore), or Azure (Southeast Asia)",
      "PDPA (Personal Data Protection Act) aware architecture",
      "MAS TRM Guidelines alignment for financial services applications",
      "SGT business hours support — close IST/SGT timezone alignment",
      "Enterprise SSO, MFA, passkeys and multi-tenant organisations",
      "OAuth2/OIDC compliant for integration with Singapore fintech ecosystems",
      "Audit logging for PDPA accountability obligations",
    ],
    whyItMatters:
      "Singapore's PDPA requires organisations to protect personal data and restrict cross-border transfers without adequate protection. Self-hosting Yesp Accounts within Singapore's AWS or GCP region keeps user authentication data within Singapore jurisdiction.",
    faq: [
      {
        q: "Is Yesp Accounts compliant with Singapore's PDPA?",
        a: "Yesp Accounts supports PDPA compliance through self-hosting within Singapore infrastructure, data minimisation by design, user consent management, and full audit logging. Singapore businesses can deploy Yesp Accounts within Singapore's AWS or GCP regions to satisfy PDPA data residency obligations.",
      },
      {
        q: "Does Yesp Accounts meet MAS TRM Guidelines for Singapore fintech?",
        a: "Yesp Accounts supports the authentication security requirements outlined in MAS Technology Risk Management Guidelines — including MFA enforcement, session management, access controls, and audit logging appropriate for financial services applications in Singapore.",
      },
    ],
  },

  {
    slug: "dubai",
    category: "geo",
    badge: "UAE",
    seo: {
      pageTitle: "Authentication Platform for Dubai & UAE Businesses | Yesp Accounts | Yesp Corporation",
      description:
        "Yesp Accounts is an enterprise authentication platform for Dubai and UAE businesses — SSO, MFA, passkeys, OAuth2, multi-tenant organisations. UAE data residency. Arabic-ready.",
      keywords:
        "authentication platform Dubai UAE, auth0 alternative UAE, enterprise SSO Dubai, identity platform Dubai, self-hosted authentication UAE, UAE data residency authentication, OAuth2 provider UAE, MFA platform Dubai, user authentication Dubai, fintech authentication UAE",
      canonical: "https://yespstudio.com/yesp-accounts/dubai",
      h1: "Enterprise Authentication Platform for Dubai and UAE Businesses",
      subheading: "UAE data residency. Arabic-ready. SSO, MFA, passkeys, OAuth2 — enterprise authentication for Dubai and UAE enterprises.",
    },
    overview:
      "UAE businesses can deploy Yesp Accounts within UAE-based cloud infrastructure — AWS Middle East (UAE), Azure UAE North — keeping user authentication data within UAE jurisdiction and meeting PDPL (Personal Data Protection Law) obligations.",
    bullets: [
      "Self-hostable on AWS Middle East (UAE) or Azure UAE North regions",
      "UAE PDPL (Personal Data Protection Law) aware architecture",
      "Arabic language support for login UI and error messages",
      "RTL (right-to-left) layout support for Arabic user interfaces",
      "India–UAE close timezone alignment — minimal IST to GST gap",
      "Enterprise SSO, MFA, passkeys and multi-tenant organisations",
      "UAE Central Bank fintech regulation awareness for financial applications",
    ],
    whyItMatters:
      "UAE's Federal Decree-Law No. 45 of 2021 (PDPL) and sector-specific UAE Central Bank regulations require careful handling of personal and financial data. Self-hosting Yesp Accounts within UAE cloud regions ensures full compliance without cross-border data transfer concerns.",
    faq: [
      {
        q: "Is Yesp Accounts available for businesses in Dubai and the UAE?",
        a: "Yes. Yesp Accounts can be deployed within UAE cloud infrastructure — AWS Middle East (UAE) and Azure UAE North — giving Dubai and UAE businesses enterprise authentication with full local data residency.",
      },
      {
        q: "Does Yesp Accounts support Arabic language for UAE users?",
        a: "Yes. The Yesp Accounts login UI supports Arabic language and RTL (right-to-left) layout — delivering a localised authentication experience for Arabic-speaking users in the UAE and wider GCC region.",
      },
    ],
  },
];

export function getAccountsFeature(slug: string): AccountsFeature | undefined {
  return accountsFeatures.find((f) => f.slug === slug);
}

export const accountsFeaturePages = accountsFeatures.filter((f) => f.category === "feature");
export const accountsGeoPages = accountsFeatures.filter((f) => f.category === "geo");
