```mermaid
flowchart TD

    A[Phase 1: Foundations] --> B[Phase 2: Project Setup]
    B --> C[Phase 3: Extension Skeleton]
    C --> D[Phase 4: Network Monitoring]
    D --> E[Phase 5: Tracker Detection]
    E --> F[Phase 6: Consent Detection]
    F --> G[Phase 7: Popup UI]
    G --> H[Phase 8: Options Page]
    H --> I[Phase 9: Blocking Mode]
    I --> J[Phase 10: Cross-Browser Support]
    J --> K[Phase 11: Polish & Publish]

    subgraph Foundations
        A1([Learn WebExtensions API])
        A2([Learn webRequest API])
        A3([Learn Message Passing])
        A4([Learn Tracker Lists])
    end

    subgraph Setup
        B1([Create Repo])
        B2([Add /docs Structure])
        B3([Write Overview & Architecture])
    end

    subgraph Skeleton
        C1([manifest.json])
        C2([background.js])
        C3([content.js])
        C4([popup.html + popup.js])
        C5([options.html + options.js])
    end

    subgraph Monitoring
        D1([Implement onBeforeRequest])
        D2([Implement onHeadersReceived])
        D3([Implement onCompleted])
        D4([Log Requests])
    end

    subgraph Trackers
        E1([Load Tracker Lists])
        E2([Parse Lists])
        E3([Match URLs])
        E4([Store Results])
    end

    subgraph Consent
        F1([Detect Cookie Banner])
        F2([Detect User Click])
        F3([Timestamp Consent])
        F4([Compare with Requests])
    end

    subgraph Popup
        G1([Show Trackers])
        G2([Show Violations])
        G3([Show Timeline])
        G4([Show History])
    end

    subgraph Options
        H1([Blocking Mode Toggle])
        H2([Custom Lists])
        H3([Strict Mode])
    end

    subgraph Blocking
        I1([webRequestBlocking])
        I2([Block Trackers])
        I3([Strip Cookies])
        I4([Redirect Requests])
    end

    subgraph CrossBrowser
        J1([Chrome])
        J2([Firefox])
        J3([Edge])
    end

    subgraph Publish
        K1([Polish UI])
        K2([Write README])
        K3([Submit to Chrome Web Store])
    end
