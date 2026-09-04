```mermaid
sequenceDiagram
    participant Page
    participant ContentScript
    participant Background
    participant Popup

    Page->>ContentScript: Cookie banner appears
    ContentScript->>Background: Banner detected
    Page->>Background: Network requests fire
    Background->>Background: Check tracker lists
    Background->>Background: Timestamp requests
    ContentScript->>Background: User clicks consent
    Background->>Background: Compare timestamps
    Background->>Popup: Update dashboard
