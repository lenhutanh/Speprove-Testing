# Test Case: TC-PRACTICE-002 - Verify Stop button lock state transitions from disabled to enabled at the 10-second boundary

## 1. General Information
| Field | Details / Description |
| :--- | :--- |
| **Test Case ID** | TC-PRACTICE-002 |
| **Feature** | Practice |
| **Description** | Verify that the Stop button (square icon) in the bottom control bar transitions from disabled to enabled at the 10-second boundary. |
| **Created By** | Le Nhut Anh |
| **Version** | 1.0 |
| **Automation Script** | [practice.spec.ts](../../automation/e2e/practice.spec.ts) |

## 2. Test Execution Log
| Tester | Date Tested | Status | Remarks |
| :--- | :--- | :--- | :--- |
| Le Nhut Anh | 2026-07-25 | **PASS** | Automated test script executed successfully. Stop button remains disabled during the first 9s and becomes enabled after 10s. |

## 3. Pre-conditions & Test Data
### Pre-conditions
| S # | Pre-conditions Details |
| :---: | :--- |
| 1 | User is successfully authenticated with a valid session state. |
| 2 | User is currently at a dynamic question practice workspace (`/forecast/[forecastSlug]/practice/[questionId]`). |

### Test Data
None.

## 4. Test Scenario & Steps
**Scenario:** Verify Stop button lock mechanism during recording countdown.

| Step | Action Details | Expected Results | Actual Results | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1 | Click the Record button (microphone icon) | Recording starts and the countdown timer is displayed. | As expected | **PASS** |
| 2 | Wait for 5 seconds | The countdown timer updates. The Stop button (square icon) must remain disabled (the HTML `disabled` attribute is present). | As expected | **PASS** |
| 3 | Wait another 5.5 seconds (total elapsed > 10s) | The countdown timer passes 10 seconds. The Stop button (square icon) must become active/enabled (the HTML `disabled` attribute is removed). | As expected | **PASS** |

## 5. Testing Techniques Applied
*   Boundary Value Analysis (BVA) - verifying transition at $T = 10s$ boundary.
*   State Transition Testing.
